import React from 'react';

export default function About() {
    return (
        <div className="container my-4">
            <h1 className="mb-3">About iNotebook</h1>

            <p>
                <strong>iNotebook</strong> is a full-stack web application built using the MERN stack
                that allows users to securely create, manage, and organize their notes in one place.
                It focuses on simplicity, speed, and secure access to personal data.
            </p>

            <h3 className="mt-4">🚀 Key Features</h3>
            <ul>
                <li>User authentication using JWT (Login & Signup)</li>
                <li>Create, update, and delete notes (CRUD operations)</li>
                <li>Secure API with protected routes</li>
                <li>Real-time UI updates without page reload</li>
                <li>Responsive design for better usability</li>
            </ul>

            <h3 className="mt-4">🛠️ Tech Stack</h3>
            <ul>
                <li><strong>Frontend:</strong> React.js, Context API</li>
                <li><strong>Backend:</strong> Node.js, Express.js</li>
                <li><strong>Database:</strong> MongoDB</li>
                <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
            </ul>

            <h3 className="mt-4">🎯 Purpose of the Project</h3>
            <p>
                This project was built as part of my journey to master the MERN stack.
                It demonstrates my understanding of full-stack development, including
                API design, state management, authentication, and database handling.
            </p>

            <h3 className="mt-4">📌 What I Learned</h3>
            <ul>
                <li>Handling authentication and authorization securely</li>
                <li>Designing RESTful APIs</li>
                <li>Managing global state using Context API</li>
                <li>Connecting frontend with backend efficiently</li>
            </ul>

            <h3 className="mt-4">⚡ Future Improvements</h3>
            <ul>
                <li>Add search and filtering functionality</li>
                <li>Implement tags and categories</li>
                <li>Enable cloud sync & sharing features</li>
                <li>Improve UI/UX with better design system</li>
            </ul>
        </div>
    );
}