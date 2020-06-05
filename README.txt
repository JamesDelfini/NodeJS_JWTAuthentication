# Initialize the Project
    > npm init -y

    # Installations
        # Install express, JSONWebToken (JWT), and DOTENV
            > npm i express jsonwebtoken dotenv

        # Install Nodemon
            > npm i --save-dev nodemon

        # Install REST Client in VSCode
            To test the http request through VSCode for the file
            of request.rest. You may use postman, if you wish to.

    # Commands
        # Run the project Express Server
            > npm run-script devStart
        
        # Run the project Express Server Authentication
            > npm run-script devStartAuth

        # Crypto to generate Tokens
            Use this crypto command to generate .env tokens
            > node
                > require('crypto').randomBytes(64).toString('hex')
    
# Source
    # JWT Authentication Tutorial - Node.js
        > https://www.youtube.com/watch?v=mbsmsi7l3r4