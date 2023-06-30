import React from 'react'

export default function Done() {
  return (
    <div>
        <h4 className="flex bg-green-300 rounded-lg px-1">
              Done:
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </h4>
    </div>
  )
}