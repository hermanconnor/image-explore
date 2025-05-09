'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const SearchBar = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const search = formData.get('search')?.toString().trim();

    if (search) {
      router.push(`/search/${search}`);
    }
  };

  return (
    <section>
      <form className='mx-auto w-full max-w-sm' onSubmit={handleSubmit}>
        <label className='input input-bordered input-accent flex items-center pr-0'>
          <span className='sr-only'>Search for photos</span>
          <input
            type='search'
            name='search'
            placeholder='Search photos...'
            className='grow py-1.5'
            aria-label='Search for photos'
          />
          <button type='submit' className='btn btn-accent'>
            <svg
              fill='#fff'
              height='24'
              viewBox='0 0 23 23'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
              <path d='M0 0h24v24H0z' fill='none' />
            </svg>
          </button>
        </label>
      </form>
    </section>
  );
};

export default SearchBar;
