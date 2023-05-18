import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  return (
    <Form>
      <FormRow label="Full name" error={""}>
        <Input type="text" id="fullName" />
      </FormRow>

      <FormRow label="Email address" error={""}>
        <Input type="email" id="email" />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={""}>
        <Input type="password" id="password" />
      </FormRow>

      <FormRow label="Repeat password" error={""}>
        <Input type="password" id="passwordConfirm" />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
