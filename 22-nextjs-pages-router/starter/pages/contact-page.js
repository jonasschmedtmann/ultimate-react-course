import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div>
      <h1 className='text-4xl mb-8 text-accent-400 font-medium'>
        Any question? Shoot us a message
      </h1>

      <form className='bg-primary-900 py-10 px-14 text-lg space-y-6 max-w-5xl mx-auto'>
        <div className='space-y-2'>
          <label>Full name</label>
          <input
            required
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            name='fullName'
          />
        </div>

        <div className='space-y-2'>
          <label>Email address</label>
          <input
            type='email'
            name='email'
            required
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          />
        </div>

        <div className='space-y-2'>
          <label>Subject</label>
          <select
            required
            name='subject'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
          >
            <option value=''>Select subject...</option>
            <option value='booking-enquiry'>Booking enquiry</option>
            <option value='cabin-information'>Cabin information</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div className='space-y-2'>
          <label>Message</label>
          <textarea
            name='message'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            rows={3}
          />
        </div>

        <div className='flex justify-between items-center text-red-500'>
          <button className='bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'>
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
