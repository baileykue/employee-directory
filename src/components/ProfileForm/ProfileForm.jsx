import React from 'react';

export default function ProfileForm({ isCreatingProfile }) {
  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="text" />
      </label>
      <label>
        Birthday:
        <input type="date" />
      </label>
      <label>
        <textarea />
      </label>
      <button>submit</button>
    </form>
  );
}
