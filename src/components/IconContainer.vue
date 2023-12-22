<template>
  <div>
    <svg
      v-if="iconType == 'dashboard'"
      class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 21"
    >
      <path
        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
      />
      <path
        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
      />
    </svg>
    <svg
      v-if="iconType == 'icon-password'"
      class="w-4 h-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 20"
    >
      <path
        d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z"
      />
    </svg>
    <svg
      v-if="iconType == 'icon-email'"
      class="w-4 h-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 16"
    >
      <path
        d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
      />
      <path
        d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
      />
    </svg>

    <svg
      v-if="iconType == 'icon-sidebar'"
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>

    <img
      v-if="iconType == 'logo'"
      src="https://www.lgcns.com/en/wp-content/uploads/sites/2/2022/11/logo_2x.png"
      alt=""
    />

    <svg
      v-if="iconType == 'icon-edit'"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.08551 13.2279L7.56634 13.0021L12.233 8.33126L9.98634 6.08376L5.30551 10.7646L5.08551 13.2279ZM11.103 4.96792L13.3488 7.21376L14.9713 5.58876L12.7263 3.34376L11.103 4.96792ZM3.57719 14.7379C3.40219 14.5629 3.31469 14.3196 3.33636 14.0729L3.65219 10.5979C3.68719 10.2171 3.85553 9.85792 4.12719 9.58626L11.6239 2.08959C12.2089 1.50209 13.2697 1.53126 13.8872 2.14709L16.1689 4.42876L16.1697 4.42959C16.8072 5.06792 16.833 6.08292 16.2264 6.69126L8.72886 14.1888C8.45803 14.4596 8.09886 14.6279 7.71719 14.6629L4.24219 14.9788C4.21719 14.9804 4.19219 14.9813 4.16636 14.9813C3.94719 14.9813 3.73469 14.8946 3.57719 14.7379ZM16.6663 17.4813C16.6663 17.9396 16.2913 18.3146 15.833 18.3146H4.16634C3.70884 18.3146 3.33301 17.9396 3.33301 17.4813C3.33301 17.0238 3.70884 16.6479 4.16634 16.6479H15.833C16.2913 16.6479 16.6663 17.0238 16.6663 17.4813Z"
        fill="#C5CEE0"
      />
    </svg>

    <svg
      v-if="iconType == 'icon-delete'"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.33335 13.3333C8.33335 13.7917 7.95835 14.1667 7.50002 14.1667C7.04169 14.1667 6.66669 13.7917 6.66669 13.3333V10C6.66669 9.54167 7.04169 9.16667 7.50002 9.16667C7.95835 9.16667 8.33335 9.54167 8.33335 10V13.3333ZM13.3334 13.3333C13.3334 13.7917 12.9584 14.1667 12.5 14.1667C12.0417 14.1667 11.6667 13.7917 11.6667 13.3333V10C11.6667 9.54167 12.0417 9.16667 12.5 9.16667C12.9584 9.16667 13.3334 9.54167 13.3334 10V13.3333ZM15 15.8333C15 16.2925 14.6267 16.6667 14.1667 16.6667H5.83335C5.37335 16.6667 5.00002 16.2925 5.00002 15.8333V6.66667H15V15.8333ZM8.33335 3.60667C8.33335 3.47751 8.51169 3.33334 8.75002 3.33334H11.25C11.4884 3.33334 11.6667 3.47751 11.6667 3.60667V5.00001H8.33335V3.60667ZM17.5 5.00001H16.6667H13.3334V3.60667C13.3334 2.53667 12.3992 1.66667 11.25 1.66667H8.75002C7.60085 1.66667 6.66669 2.53667 6.66669 3.60667V5.00001H3.33335H2.50002C2.04169 5.00001 1.66669 5.37501 1.66669 5.83334C1.66669 6.29167 2.04169 6.66667 2.50002 6.66667H3.33335V15.8333C3.33335 17.2117 4.45502 18.3333 5.83335 18.3333H14.1667C15.545 18.3333 16.6667 17.2117 16.6667 15.8333V6.66667H17.5C17.9584 6.66667 18.3334 6.29167 18.3334 5.83334C18.3334 5.37501 17.9584 5.00001 17.5 5.00001Z"
        fill="#C5CEE0"
      />
      <mask
        id="mask0_212_384"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="18"
        height="18"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.33335 13.3333C8.33335 13.7917 7.95835 14.1667 7.50002 14.1667C7.04169 14.1667 6.66669 13.7917 6.66669 13.3333V10C6.66669 9.54167 7.04169 9.16667 7.50002 9.16667C7.95835 9.16667 8.33335 9.54167 8.33335 10V13.3333ZM13.3334 13.3333C13.3334 13.7917 12.9584 14.1667 12.5 14.1667C12.0417 14.1667 11.6667 13.7917 11.6667 13.3333V10C11.6667 9.54167 12.0417 9.16667 12.5 9.16667C12.9584 9.16667 13.3334 9.54167 13.3334 10V13.3333ZM15 15.8333C15 16.2925 14.6267 16.6667 14.1667 16.6667H5.83335C5.37335 16.6667 5.00002 16.2925 5.00002 15.8333V6.66667H15V15.8333ZM8.33335 3.60667C8.33335 3.47751 8.51169 3.33334 8.75002 3.33334H11.25C11.4884 3.33334 11.6667 3.47751 11.6667 3.60667V5.00001H8.33335V3.60667ZM17.5 5.00001H16.6667H13.3334V3.60667C13.3334 2.53667 12.3992 1.66667 11.25 1.66667H8.75002C7.60085 1.66667 6.66669 2.53667 6.66669 3.60667V5.00001H3.33335H2.50002C2.04169 5.00001 1.66669 5.37501 1.66669 5.83334C1.66669 6.29167 2.04169 6.66667 2.50002 6.66667H3.33335V15.8333C3.33335 17.2117 4.45502 18.3333 5.83335 18.3333H14.1667C15.545 18.3333 16.6667 17.2117 16.6667 15.8333V6.66667H17.5C17.9584 6.66667 18.3334 6.29167 18.3334 5.83334C18.3334 5.37501 17.9584 5.00001 17.5 5.00001Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_212_384)"></g>
    </svg>

    <svg
      v-if="iconType == 'icon-arrow-next'"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M1 5.59101L11 5.59101"
        stroke="#717171"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 0.591003L11 5.591L6 10.591"
        stroke="#717171"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-if="iconType == 'icon-arrow-prev'"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M11 5.591H1"
        stroke="#717171"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 10.591L1 5.591L6 0.591003"
        stroke="#717171"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-if="iconType == 'icon-login'"
      class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 16"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
      />
    </svg>

    <svg
      v-if="iconType == 'icon-register'"
      class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
      />
      <path
        d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
      />
      <path
        d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
      />
    </svg>

    <svg
      v-if="iconType == 'icon-loading'"
      aria-hidden="true"
      role="status"
      class="inline w-4 h-4 me-3 text-white animate-spin"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="#E5E7EB"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentColor"
      />
    </svg>

    <svg
      v-if="iconType == 'icon-user'"
      class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 18"
    >
      <path
        d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
      />
    </svg>

    <svg
      v-if="iconType == 'icon-password-hidden'"
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 18"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>

    <svg
      v-if="iconType == 'icon-password-display'"
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 14"
    >
      <g
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path
          d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    iconType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  width: 150px;
}
</style>
