# Next Sanity Starter

A powerful starter project integrating Next.js with Sanity CMS. This boilerplate offers a solid foundation for developing modern, content-rich web applications with features like server-side rendering, static site generation, and a flexible CMS.

## Features

- **Next.js**: A React framework for building dynamic user interfaces with support for server-side rendering, static site generation, and API routes.
- **Sanity**: A headless CMS that provides a customizable and intuitive content management studio.
- **TypeScript**: Type-safe development with TypeScript for enhanced code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework that speeds up UI development with a highly customizable design system.
- **Sanity Studio**: An admin interface for creating, managing, and organizing your Sanity content.

## Prerequisites

- **Node.js**: Version 14 or later
- **npm** or **Yarn**: Package managers for handling dependencies
- **Sanity.io Project**: Sign up at [Sanity.io](https://www.sanity.io/) if you don’t have a project set up yet.

## Getting Started

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/leomanlapera/next-sanity-starter.git
cd next-sanity-starter
```

### 2. Install Dependencies

Install the necessary dependencies using npm or Yarn:

```bash
npm install
# or
yarn install
```

### 3. Set Up Sanity

1. **Create a Sanity Project**: Follow [Sanity’s Getting Started guide](https://www.sanity.io/docs/getting-started) to create a new project if you haven’t done so already.

2. **Add Sanity API Credentials**:

   - Create a `.env.local` file in the root directory of your project.
   - Add the following environment variables to the `.env.local` file:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   NEXT_PUBLIC_SANITY_DATASET=your-sanity-dataset
   SANITY_API_READ_TOKEN=your-sanity-access-token
   NEXT_PUBLIC_DOMAIN_URL=your-domain-url
   ```

### 4. Run the Development Server

Start the development server to view your application locally:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

### 5. Build and Deploy

To build the application for production use:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run start
# or
yarn start
```

### Configuration

- **`next.config.js`**: Configure Next.js settings here.
- **Sanity Studio Configurations**: Located in the `studio` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to further customize the README to fit any additional project-specific information or personal preferences!
