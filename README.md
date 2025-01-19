# React Native Mobile App

A modern React Native mobile application built with Expo, featuring a comprehensive component library with Storybook integration, testing setup, and state management.

## 📱 Target Devices

- iPhone 12
- iPhone 13
- iPhone 14 Pro
- iPhone 14

Screen size: 390x844 pixels

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Run Storybook:
```bash
npm run storybook
```

4. Run tests:
```bash
npm test
```

## 🛠 Tech Stack

### Core Technologies
- **React Native**: Mobile app development framework
- **Expo**: Development platform for React Native
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Screen navigation and transitions
  - Stack Navigator for main app flow
  - Type-safe navigation parameters
  - Custom screen transitions

### State Management
- **Zustand**: Lightweight state management
  - Chosen for its simplicity and minimal boilerplate
  - Perfect for small to medium-sized applications
  - Easy integration with React hooks
  - Manages exercise scheduling state:
    - Exercise selections
    - Habit vs once-off settings
    - Schedule times and days

### Form Management
- **Formik**: Form state and validation
  - Handles complex form logic
  - Built-in validation support
  - Great TypeScript integration
- **Yup**: Schema validation
  - Validates exercise scheduling forms
  - Type-safe validation rules
  - Custom validation messages

### Component Development
- **Storybook**: Component development and documentation
  - Isolated component development
  - Visual testing
  - Interactive documentation

### Testing
- **Jest**: Testing framework
- **@testing-library/react-native**: Component testing
  - Encourages testing user interactions
  - Simulates real user behavior
  - Accessibility-focused testing

### UI Components
The project includes a comprehensive set of reusable components:

1. **Buttons**
   - Icon buttons
   - Navigation buttons
   - Standard buttons with variants (default, active)

2. **Input Components**
   - Time input with icon and clear functionality
   - Multi-select buttons
   - Week day selector
   - Toggle switches
   - Dropdown with custom popup selector

3. **Display Components**
   - Chips
   - Pop-up selector
   - Toast notifications
   - Typography (Headings)
   - Color palette
   - Exercise list items

## 📁 Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── __tests__/
│   │   │   └── Button.test.tsx
│   │   ├── IconButton.tsx
│   │   └── NavigationButton.tsx
│   ├── Input/
│   ├── MultiSelect/
│   ├── PopupSelector/
│   ├── StyleGuide/
│   └── Typography/
├── screens/
│   ├── HomeScreen.tsx
│   └── ScheduleScreen.tsx
├── store/
│   └── useStore.ts
└── types/
    └── navigation.ts
```

## 🎨 Design System

### Colors
The application uses a consistent color palette defined in `src/components/StyleGuide/ColorPalette.tsx`:

- Gray scale (50-900)
- Blue scale (50-900)
- Red scale (50-600)

### Typography
Consistent text styles defined in `src/components/Typography/Headings.tsx`:

- H1: 24px, Bold
- H2: 20px, Semibold
- H3: 18px, Semibold
- Subheader: 16px, Regular

## 🧪 Testing Guidelines

1. Every component should have:
   - Unit tests for logic
   - Integration tests for user interactions
   - Snapshot tests for UI consistency

2. Test files location:
   - Place in `__tests__` directory next to component
   - Name pattern: `ComponentName.test.tsx`

3. Testing principles:
   - Test user interactions
   - Verify component states
   - Check accessibility
   - Test error states

## 📚 Storybook Usage

1. Component stories should:
   - Demonstrate all variants
   - Show interactive states
   - Include edge cases
   - Document props usage

2. Story organization:
   - Group by component type
   - Include default state
   - Show all variants
   - Demonstrate interactions

## 🔄 State Management Guidelines

1. Zustand Store:
   - Manages exercise scheduling state
   - Stores exercise configurations:
     - Exercise type (habit/once-off)
     - Selected days for habits
     - Notification times
   - Implements proper typing
   - Uses selectors for performance

2. State organization:
   - Split by domain
   - Keep related state together
   - Use computed values
   - Implement proper typing

## 📱 Navigation

Using React Navigation with:
- Stack navigation for main flow
  - Home screen (exercise list)
  - Schedule screen (exercise configuration)
- Type-safe navigation params
- Screen preloading
- Custom transitions

## 🎯 Development Guidelines

1. Component Creation:
   - Create story first (Storybook-driven development)
   - Write tests before implementation
   - Document props and usage
   - Include accessibility considerations

2. Code Style:
   - Follow TypeScript best practices
   - Use functional components
   - Implement proper error handling
   - Add comprehensive documentation

3. Performance:
   - Implement proper memoization
   - Optimize re-renders
   - Use proper image optimization
   - Implement lazy loading

## 🤖 For LLMs

When working with this project, note:

1. Component Structure:
   - All components are in `src/components`
   - Each component has its own directory
   - Include stories and tests
   - Follow established patterns

2. State Management:
   - Use Zustand for global state
   - Keep component state local when possible
   - Follow existing store patterns
   - Exercise state management patterns

3. Testing:
   - Always maintain test coverage
   - Follow existing test patterns
   - Include all test cases

4. Styling:
   - Use StyleSheet.create
   - Follow color palette
   - Maintain consistent spacing
   - Use typography system

## 🆕 Recent Updates

### New Features
- Exercise scheduling functionality
- Home screen with exercise list
- Schedule screen with form validation
- Navigation between screens
- Exercise state management

### New Components
- Exercise list items
- Schedule form components
- Navigation integration

### State Management
- Exercise scheduling store
- Form state handling
- Navigation state management