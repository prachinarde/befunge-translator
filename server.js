const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 4000;

app.use(express.json()); // For parsing application/json

// Befunge Translation API
app.post('/translate', async (req, res) => {
    const inputCode = req.body.input; // The code you want to translate into Befunge

    if (!inputCode) {
        return res.status(400).json({ error: 'No input code provided' });
    }

    try {
        // Make the API call to OpenAI to get the Befunge code
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4', // Using a more capable model
            messages: [
                {
                    role: 'user',
                    content: `Translate the following JavaScript code into a valid Befunge-93 program. The translation should strictly follow the Befunge-93 format. 
The output should only contain the translated Befunge code in the exact format shown below. 
Please ensure that the program works in a Befunge interpreter and ends with '@'.

Example output format:
>25*"!dlrow ,olleH":v
                  v:,_@
                  >  ^

Your input code is: 
${inputCode}`
                }
            ],
            max_tokens: 200,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        let responseContent = response.data.choices[0].message.content.trim();

        // Extract only the Befunge code
        const befungeCodeMatch = responseContent.match(/>.*@/s); // Match Befunge-93 code that starts with `>` and ends with `@`
        const befungeCode = befungeCodeMatch ? befungeCodeMatch[0] : '';

        if (!befungeCode) {
            return res.status(500).json({ error: 'Could not extract valid Befunge code from the response.' });
        }

        // Send the Befunge code back as the response
        res.json({ befungeCode });
    } catch (error) {
        console.error('Error in API call:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate Befunge code' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
