# React Native Mobile App

A modern React Native mobile application built with Expo, featuring a comprehensive component library with Storybook integration, testing setup, and state management.

## Notes
I have done my best to approximate the designs and interactions. There are a few areas where i've gone off script:

- The date picker is different from the design as the plugin for React Native was not able to properly build on the current version of Expo. There is a bug filed but no resolution.
- The date picker is shown in a modal, this is not in the design. And it changes based on if you're choosing a time or a date/time. Need to spend a bit more time on this.
- The time clears when switching between the "habit" and "once off" toggle.
- Not quite sure why there are 2 notifications. I should have asked for more of an explanation. 
- I am still tweaking some of the form interactions with clearing and validations.
- When a form is submitted the app will navigate back to a listing page which will show the previous selections coming from the state.
- Editing of state is left for further work.
- No frameworks were used for this project to show my ability to create components from scratch.
- I was a little rusty to get started as I haven't been coding consistently since leaving my previous job. I will only get faster over time as I flex that muscle again. 
- Hopefully this will give a good feel of my abilities and it aligns with the current Mello app structure. 

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

## Selected script explinations

```bash
npm run build-storybook
```
This builds storybook stories

```bash
npm run storybook-generate
```
This builds storybook stories for viewing on device.

```bash
npm run storybook:<device: ios | andorid>
```
Starts the <device> project in Storybook mode

```bash
npm run ios:iPhone_14
```
Starts the project in on the iPhone 14. May require installing the simulator on your machine. 



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
│   │   ├── IconButton.tsx
│   │   ├── IconButton.stories.tsx
│   │   ├── NavigationButton.stories.tsx
│   │   └── NavigationButton.tsx
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.stories.tsx
│   ├── Chip/
│   │   ├── Chip.tsx
│   │   └── Chip.stories.tsx
│   ├── Dropdown/
│   │   ├── Dropdown.tsx
│   │   └── Dropdown.stories.tsx
│   ├── Input/
│   │   ├── TimeInput.tsx
│   │   └── TimeInput.stories.tsx
│   ├── MultiSelect/
│   │   ├── MultiSelectButton.tsx
│   │   ├── MultiSelectButton.stories.tsx
│   │   ├── WeekDaySelect.tsx
│   │   └── WeekDaySelect.stories.tsx
│   ├── PopupSelector/
│   │   ├── PopupSelector.tsx
│   │   └── PopupSelector.stories.tsx
│   ├── StyleGuide/
│   │   ├── ColorPallette.tsx
│   │   └── ColorPallet.stories.tsx
│   ├── Toast/
│   │   ├── Toast.tsx
│   │   └── Toast.stories.tsx
│   ├── Toggle/
│   │   ├── Toggle.tsx
│   │   └── Toggle.stories.tsx
│   └── Typography/
│       ├── Headings.tsx
│       └── Headings.stories.tsx
├── constants/
│   ├── typography.tsx
│   ├── cards.tsx
│   └── colors.tsx
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

- Core
  - Teal: '#407178'
  - White:  '#FFFFFF',
  - Black: '#000000'
- Grey
  - Lightest Grey: '#F5F5F5'
  - Light Grey: '#EBEBEB'
  - Medium Grey 3: '#999'
  - Darg Grey: '#7D7D7D'
- Teal
  - default:'#407178'
- Classification
  - orange: '#FFCC99
  - purple: '#E1C7FF'
  - blue: '#AAC0FF'
  - green: '#CBF8D0'

### Typography
Consistent text styles defined in `src/components/Typography/Headings.tsx`:
All text is displayed using either "DM Sands" or "DM Sands Italic"

- H1: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    fontFamily: "DM-Sands"
  }
- H2: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    fontFamily: "DM-Sands"
  }
- H3: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: "DM-Sands"
  },
-  subheader: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: "DM-Sands"
  }

## 📚 Storybook Usage

1. Component stories should:
   - Demonstrate all variants
   - Show interactive states
   - Include edge cases

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
   - Write tests before implementation [For future extension of the work]
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

3. Styling:
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