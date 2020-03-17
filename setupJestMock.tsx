import React from 'react'

jest.mock('react-router-dom', () => ({
  ...require.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn(),
  }),
  useParams: () => ({
    realm: 'realm',
  }),
  Link: ({ to }: { to: string }) => <a href={to} />,
}))
