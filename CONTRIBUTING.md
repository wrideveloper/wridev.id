# Contributing to Workshop Riset Informatika Website

First off, thank you for considering contributing to the Workshop Riset Informatika (WRI) website! We welcome contributions from everyone.

## 🤝 How to Contribute

### 1. Fork the Repository
Fork this repository to your own GitHub account and then clone it to your local device.

```bash
git clone https://github.com/your-username/wridev.id.git
cd wridev.id
```

### 2. Create a Branch
Create a new branch for your feature or bug fix.

```bash
git checkout -b feature/amazing-feature
# or
git checkout -b fix/bug-fix
```

### 3. Make Changes
Make your changes to the code. Ensure your code follows the project's style and conventions.

### 4. Commit Your Changes
We follow the **Conventional Commits** specification. Please format your commit messages accordingly:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

**Example:** `feat: add new article listing component`

### 5. Push to Your Fork
Push your changes to your fork on GitHub.

```bash
git push origin feature/amazing-feature
```

### 6. Submit a Pull Request
Open a Pull Request on the original repository. Please provide a clear description of your changes and link to any relevant issues.

## ✍️ Writing Articles

We welcome article contributions from the community! To add an article:

1.  **Create a New File**:
    Inside `src/content/articles/`, create a new markdown file. The filename will be used as the slug (URL) for the article.
    *   Example: `my-awesome-tutorial.md` -> `https://wridev.id/articles/my-awesome-tutorial`

2.  **Add Frontmatter**:
    At the top of your markdown file, add the following metadata block (Frontmatter):

    ```yaml
    ---
    title: Your Article Title
    description: A brief summary of your article (visible in previews).
    image: https://path-to-your-image.com/image.jpg # Or a relative path in public/
    author: Your Name
    github: https://github.com/yourusername # Optional
    linkedin: https://linkedin.com/in/yourprofile # Optional
    date: 2024-03-20 # YYYY-MM-DD format
    tags:
      - tag1
      - tag2
    ---
    ```

3.  **Write Content**:
    Write your article content below the frontmatter using standard Markdown syntax. You can include code blocks, images, and links.

    > **Note**: For images within the article content, you can use standard markdown syntax `![Alt Text](URL)`.

## 💻 Development Workflow

1.  **Install Dependencies:** `bun install`
2.  **Start Development Server:** `bun dev`
3.  **Build for Production:** `bun run build`

## 🎨 Coding Style

- Use **TypeScript** whenever possible.
- Use **Tailwind CSS** for styling. Avoid custom CSS files unless necessary.
- Ensure all components are responsive and accessible.
- Follow the existing folder structure.

## 📝 Reporting Issues

If you find a bug or have a suggestion, please open an issue on GitHub. Include as much detail as possible to help us understand and resolve the issue.

Thank you for your contribution!
