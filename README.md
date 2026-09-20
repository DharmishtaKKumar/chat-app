# React Native Chat App

A React Native chat application developed as part of the technical assignment.

The application allows users to log in, create conversations, send messages, and receive locally generated mock bot responses with a character-by-character streaming effect.

## Tech Stack

* React Native
* Expo
* TypeScript
* Zustand – State management
* MMKV – Local storage/persistence
* React Navigation – Screen navigation
* React Hooks
* JavaScript/TypeScript

## Features

### Authentication

* Login screen with username and password fields.
* Basic form validation.
* Navigation to the conversation list after successful login.

### Conversation List

* Displays all existing conversations.
* Allows users to select and open a conversation.
* Provides an option to create a new conversation.

### Add Conversation

* User can enter a conversation name.
* A new conversation is created locally.
* After creation, the user is immediately taken to the chat screen.

### Chat

* Displays user and bot messages.
* Users can send messages.
* A local mock bot response is generated after sending a message.
* Bot responses are streamed character-by-character to simulate an AI response.
* Messages are maintained locally using Zustand.

### Local Persistence

MMKV is used for local persistence so that application data can be retained between app sessions.

## Mock AI / Streaming

This assignment does **not** use a real AI API or external chatbot endpoint.

The bot response is mocked locally in the application.

When a user sends a message:

1. The user message is added to the conversation.
2. A predefined/mock response is generated.
3. The response is split into individual characters.
4. Characters are added progressively with a small delay.
5. The UI updates during the streaming process to simulate a real-time AI response.

This approach was used because the assignment does not require integration with an actual AI service.

## Project Structure

```text
src/
├── components/
│   ├── PrimaryButton/
│   └── TextInput/
│
├── navigation/
│   └── ...
│
├── screens/
│   ├── Login/
│   ├── ConversationList/
│   ├── AddConversation/
│   └── Chat/
│
├── store/
│   └── ...
│
├── styles/
│   ├── color.tsx
│   ├── constant.tsx
│   ├── base.tsx
│   └── theme.tsx
│
└── ...
```

> The exact folder names may vary depending on the final project structure.

## State Management

Zustand is used for application state management.

The store manages data such as:

* Conversations
* Messages
* Current conversation
* Chat updates
* Local application state

Using Zustand keeps the state management lightweight and avoids unnecessary boilerplate.

## Local Storage

MMKV is used for persisting application data locally.

The application can store required conversation and message information locally so that the data can be restored when the application is reopened.

## Navigation Flow

```text
Login
  │
  ▼
Conversation List
  │
  ├── Create Conversation
  │        │
  │        ▼
  │      Chat
  │
  └── Existing Conversation
           │
           ▼
          Chat
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the Application

Start the Expo development server:

```bash
npx expo start
```

For Android:

```bash
npx expo run:android
```

For iOS:

```bash
npx expo run:ios
```

> iOS development requires macOS with Xcode.

## Development Build

The project uses Expo with native development capabilities.

To regenerate the native Android/iOS projects:

```bash
npx expo prebuild
```

For a clean prebuild:

```bash
npx expo prebuild --clean
```

Then run Android:

```bash
npx expo run:android
```

## Code Quality

The implementation follows the following practices:

* TypeScript for type safety
* Reusable components
* Separation of UI and state management
* Centralized styling
* Meaningful variable and function names
* React hooks for component state and lifecycle handling
* Avoiding unnecessary component re-renders where applicable
* Local persistence using MMKV

## Testing

The application was manually tested for the following flows:

* Login
* Navigation from Login to Conversation List
* Creating a new conversation
* Opening an existing conversation
* Sending a message
* Receiving the mock streamed bot response
* Multiple messages in a conversation
* Returning to the conversation list
* Reopening an existing conversation
* Application reload and local data persistence

## Assignment Notes

* The application uses a **local/mock chatbot response**.
* No external AI API or real-time AI endpoint is integrated.
* MMKV is used for local persistence.
* Zustand is used for application state management.
* The project is implemented using React Native, Expo, and TypeScript.

## Future Improvements

If this application were extended beyond the assignment, the following could be added:

* Real AI API integration
* User authentication with a backend
* Streaming responses using Server-Sent Events or WebSockets
* Message timestamps
* Message retry functionality
* Network/offline handling
* Message pagination
* Typing indicator
* Error handling and retry states
* Unit and component tests
* Automated CI/CD pipeline

## Author

Developed as part of the React Native technical assignment.

````

### Before submitting

I would also recommend checking these three things:

```bash
npm install
npx expo prebuild --clean
npx expo run:android
````

Then verify:

1. Login works.
2. Conversation creation works.
3. Chat message + character-by-character bot streaming works.
4. Data persists after restarting the app.
5. `README.md` is in the **root of the GitHub repository**.
6. Commit and push the final changes:

```bash
git add .
git commit -m "Complete chat app assignment"
git push
```

If you are sending the assignment to the recruiter, you can also include the **GitHub repository link and a short professional submission email**.
