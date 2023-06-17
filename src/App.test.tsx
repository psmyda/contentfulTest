import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import mockApi from './services/contentful'

const apiResponseMock = {
      "internalName": "FAQ",
      "title": "FAQ Test",
      "accordionItems": [
          {
              "sys": {
                  "id": "test1",
              },
              "fields": {
                  "internalName": "Test1?",
                  "name": "Test1?",
                  "text": "Test1Text"
              }
          },
          {
              "sys": {
                  "id": "test2",
              },
              "fields": {
                  "internalName": "Test2?",
                  "name": "Test2?",
                  "text": "Test2Text"
              }
          },
          {
              "sys": {
                  "id": "test3",
              },
              "fields": {
                  "internalName": "Test3?",
                  "name": "Test3?",
                  "text": "Test3Text"
              }
          }
      ]
    };

test('renders home page without api call', () => {
  render(<App />);

    expect(screen.getByRole("paragraph")).toHaveClass("placeholder-wave");

});

test('renders home page with api call', async () => {
    mockApi.getEntries = jest.fn().mockResolvedValue(apiResponseMock);
    render(<App />);

      expect(await screen.findByText("FAQ Test")).toBeInTheDocument();
      expect(await screen.findByText("Test1?")).toBeInTheDocument();
      expect(await screen.findByText("Test2?")).toBeInTheDocument();
      expect(await screen.findByText("Test3?")).toBeInTheDocument();
});
