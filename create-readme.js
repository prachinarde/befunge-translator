const fs = require('fs');

// Define the content of the README.md file
const readmeContent = `
# Befunge Translation API

This project is a Node.js-based Express application that translates JavaScript code into Befunge-93 code using the OpenAI API. It provides an HTTP endpoint to accept JavaScript code as input and returns its Befunge-93 equivalent.

## Features

- Accepts JavaScript code as input via a POST request.
- Translates the JavaScript code to Befunge-93 format using OpenAI's GPT-4 API.
- Handles errors and invalid inputs gracefully.
- Lightweight and easy to deploy.

---

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key

---

## Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository_url>
   cd <repository_directory>
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a \`.env\` file in the root directory and add your OpenAI API key:
   \`\`\`env
   OPENAI_API_KEY=your_openai_api_key_here
   \`\`\`

4. Start the server:
   \`\`\`bash
   node index.js
   \`\`\`

5. The server will be running at \`http://localhost:4000\`.

---

## API Endpoints

### 1. Translate JavaScript to Befunge
   **Endpoint**: \`/translate\`  
   **Method**: \`POST\`  
   **Request Body**:
   \`\`\`json
   {
     "input": "console.log('Hello, World!');"
   }
   \`\`\`
   **Response**:
   \`\`\`json
   {
     "befungeCode": ">25*\\"!dlrow ,olleH\\":v\\n                  v:,_@\\n                  >  ^"
   }
   \`\`\`

### Error Responses

- **400 Bad Request**: No input code provided.
- **500 Internal Server Error**: OpenAI API call failure or unexpected errors.

---

## Example Usage

### Using \`curl\`
\`\`\`bash
curl -X POST http://localhost:4000/translate \\
-H "Content-Type: application/json" \\
-d '{"input": "console.log(\\"Hello, World!\\");"}'
\`\`\`

### Response
\`\`\`json
{
  "befungeCode": ">25*\\"!dlrow ,olleH\\":v\\n                  v:,_@\\n                  >  ^"
}
\`\`\`

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **HTTP Client**: Axios
- **OpenAI API**: GPT-4 for translation

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

---

## Acknowledgments

- OpenAI for their powerful GPT-4 model.
- Befunge for inspiring esoteric programming enthusiasts.

Happy coding! 🚀
`;

// Write the content to a README.md file
fs.writeFile('README.md', readmeContent.trim(), (err) => {
  if (err) {
    console.error('Error writing README.md:', err);
  } else {
    console.log('README.md file created successfully!');
  }
});
