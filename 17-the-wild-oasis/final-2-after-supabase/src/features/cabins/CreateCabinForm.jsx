import { useForm } from 'react-hook-form';

import { useCreateCabin } from 'features/cabins/useCreateCabin';
import FormRow from 'ui/FormRow';
import Input from 'ui/Input';
import Form from 'ui/Form';
import Button from 'ui/Button';
import FileInput from 'ui/FileInput';
import { useEditCabin } from './useEditCabin';
import { Textarea } from 'ui/Textarea';

// We use react-hook-form to make working with complex and REAL-WORLD forms a lot easier. It handles stuff like user validation and errors. manages the form state for us, etc
// Validating the user’s data passed through the form is a crucial responsibility for a developer.
// React Hook Form takes a slightly different approach than other form libraries in the React ecosystem by adopting the use of uncontrolled inputs using ref instead of depending on the state to control the inputs. This approach makes the forms more performant and reduces the number of re-renders.

// Receives closeModal directly from Modal
function CreateCabinForm({ cabinToEdit, closeModal }) {
  const { mutate: createCabin, isLoading: isCreating } = useCreateCabin();
  const { mutate: editCabin, isLoading: isEditing } = useEditCabin();
  const isWorking = isCreating || isEditing;

  // For an editing session
  const { id: editId, ...editValues } = cabinToEdit || {};
  delete editValues.created_at;
  const isEditSession = Boolean(editId);

  // One of the key concepts in React Hook Form is to register your component into the hook. This will make its value available for both the form validation and submission.
  const { register, handleSubmit, formState, reset, getValues } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  // Invoked in ALL validation passes. Here we get access to the form data
  const onSubmit = function (data) {
    // No need to validate here, because it's already been done. This is REALLY nice!

    const options = {
      onSuccess: (data) => {
        // If this component is used OUTSIDE the Modal Context, this will return undefined, so we need to test for this
        closeModal?.();
        reset();
      },
    };

    const image = typeof data.image === 'object' ? data.image[0] : data.image;

    if (isEditSession)
      editCabin(
        {
          newCabinData: { ...data, image },
          id: editId,
        },
        options
      );
    else createCabin({ ...data, image }, options);
  };

  // Invoked when validation fails
  const onError = function (errors) {
    console.log('Failed validation!', errors);
  };

  // By default, validation happens the moment we submit the form, so when we call handleSubmit. From them on, validation happens on the onChange event [demonstrate]. We cah change that by passing options into useForm ('mode' and 'reValidateMode')
  // https://react-hook-form.com/api/useform

  // The registered names need to be the same as in the Supabase table. This makes it easier to send the request
  // "handleSubmit" will validate your inputs before invoking "onSubmit"

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type='modal'>
      <FormRow label='Cabin name' error={errors?.name?.message}>
        {/* register your input into the hook by invoking the "register" function */}
        {/* why the ...? Because this will return an object { onChange, onBlur, customer, ref }, and by spreading we then add all these to the element [show dev tools] */}
        {/* include validation with required or other standard HTML validation rules: required, min, max, minLength, maxLength, pattern, validate */}
        {/* errors will return when field validation fails  */}
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Price should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          defaultValue={0}
          disabled={isWorking}
          {...register('discount', {
            required: "Can't be empty, make it at least 0",
            validate: (value) =>
              getValues().regularPrice >= value ||
              'Discount should be less than regular price',
          })}
        />
      </FormRow>

      <FormRow
        label='Description for website'
        error={errors?.description?.message}
      >
        <Textarea
          type='number'
          id='description'
          defaultValue=''
          disabled={isWorking}
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label='Cabin photo' error={errors?.image?.message}>
        <FileInput
          id='image'
          accept='image/*'
          disabled={isWorking}
          {...register('image', {
            // required: 'This field is required',
            required: isEditSession ? false : 'This field is required',

            // VIDEO this doesn't work, so never mind about this, it's too much
            // validate: (value) =>
            //   value[0]?.type.startsWith('image/') || 'Needs to be an image',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
          disabled={isWorking}
          onClick={() => closeModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit cabin' : 'Create new cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
