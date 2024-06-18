import { Container, HStack, Text } from '@chakra-ui/react'


export default {
  title: 'Apakah Kuliah Sarjana Terapan sama dengan S1?',
  description:
    'Sarjana Terapan dan S1 keduanya memiliki kualifikasi akademik yang setara. Sarjana terapan adalah jenjang pendidikan vokasi. Sementara sarjana adalah jenjang pendidikan akademik.',
  plans: [
    {
      id: 'oss',
      title: 'Open Source',
      description: 'Basic compoents, perfect to get started.',
      price: 'Free',
      features: [
        {
          title: 'MIT License',
        },
        {
          title: 'Authentication (Clerk/Supabase/Magic)',
        },
        {
          title: 'Form (react-hook-form)',
        },
        {
          title: 'Modals manager',
        },
        {
          title: 'Hotkeys',
        },
        {
          title: 'Web3 components',
        },
        {
          title: 'And much more...',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Bootstrap',
      description: 'Complete frontend stack for bootstrappers and small teams.',
      price: 'Free',
      isRecommended: true,
      features: [
        {
          title: 'One project',
        },
        {
          title: 'One developer',
        },
        {
          title: 'Advanced components',
        },
        {
          title: 'Multiple themes',
        },
        {
          title: 'Next.js and Electron boilerplates',
        },
        {
          title: 'Private discord community',
        },
        {
          title: '1 year of updates',
        },
        null,
        {
          title: 'Private beta access',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
  ],
}
