import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    // attributify: true,
    alias: {
        'center-items': 'flex justify-center items-center',
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
});
