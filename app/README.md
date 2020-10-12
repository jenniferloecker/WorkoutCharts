
# Peaksware Javascript Code Test Instructions

We have provided a React application shell, including Redux, Jest,
and a charting library, and we've listed more details on those below. If you are more
comfortable with different libraries or frameworks, you may substitute whatever you prefer.

Your task is to write a small single page application that loads the data from
`workout-data.json`, runs calculations, and displays a chart, and calculation results. Your
application should be well structured and demonstrate what you consider production quality, readable,
maintainable, and testable software.

The look & feel of the user interface is not part of the evaluation, we are interested primarily
in the functionality and quality of your implementation.

## Algorithm
- Write a method that finds the best 20 minute power effort, where "best" is defined as
    highest continuous average for the given time period
- Make your algorithm as efficient as possible
- Use your method to calculate the 1, 5, 10, 15, and 20 minute best efforts

## User Interface Functionality
- Display the power output over time on a chart, using time as the X axis
- Display the 1, 5, 10, 15, and 20 minute best effort values

## Best Practices
- This program was purposely written without best practices in mind
- Rewrite and refactor to use best practices, data structures, functional or OO patterns
- Refactor to display additional channels such as heart rate and speed

## Communication and Delivery
- If you have any questions on the code or instructions, please don't hesitate to email
- Please submit your completed test as a zip file, private dropbox or other file sharing
    link, or using a private github repo
- Include any information or instructions needed to compile and run your application
- **Do Not Include NPM Modules!**
    We really don't want to unzip 20,000 NPM files; we would much rather just run `npm ci` instead.


# React Application Shell

Our application shell, built on top of [Create React App 3.4.1](https://www.npmjs.com/package/create-react-app/v/3.4.1), provides you with the following npm commands and modules


## NPM Commands
- `npm ci`
- `npm start`
- `npm test`


## NPM Modules

### React
- [React 16.13.1](https://www.npmjs.com/package/react/v/16.13.1)
- [React DOM 16.13.1](https://www.npmjs.com/package/react-dom/v/16.13.1)
- [PropTypes 15.7.2](https://www.npmjs.com/package/prop-types/v/15.7.2)

### Redux
- [Redux 4.0.5](https://www.npmjs.com/package/redux/v/4.0.5)
- [React-Redux 7.2.1](https://www.npmjs.com/package/react-redux/v/7.2.1)

### Charts
- [Recharts 1.8.5](https://www.npmjs.com/package/recharts/v/1.8.5)

### Testing
- [Jest 24.9](https://www.npmjs.com/package/jest/v/24.9.0)


