---
title: "On Building this Website"
subtitle: "Shoutout to the Olickel"
date: "21 August 2024"
completed: false 
---

## Before Reading:

This post comes in two parts.

First is my latest thoughts on writing, mostly in conversations with a particular human being, and second is step-by-step of how this website was built.

Skip ahead to Building this Website part if that's what you're looking for!

---

## Part 1: Slightly Long Preface

Here are a few on my wishlist.

- **I've always wanted to build a custom website.**

  Call me caught up in minute details, but I wanted to create something that looked pretty to me to start with. I played around with a few platforms, but none gave me the satisfaction of "wow, here's a playground I want to frequent!"

- **I've always wanted to write more, and consistently.**

  Writing is hard. Writing regularly is harder. Writing to satisfaction is the hardest.

  Once I grew out of the habit of writing, because you know life happens, it was really difficult to go back to it.

I had a few conversations on this with Hrishi, our titular (or in this case, sub-titular) character for this post (and maybe good to mention that his last name is Olickel), who has an awesome habit of writing and has been a rock in my writing attempts, or any projects in general.

> [!note] A Good Writing Reference
> This is [his blog](https://olickel.com) by the way. Check it out!

I often think the best way to learn anything is to learn from and observe someone who's been doing it for years. Hrishi's been writing in all the years I've known him, and I enjoyed reading them.

And the cool thing about knowing the writer behind one of your favorite writings is you can get some good tips at random, say, while you're eating some good biryani together.

Here are some that stuck with me over time, some over good meals and some over my random call for help:

1. **Just write.**

This was a piece of advice and instruction that I found quite useful (and have struggled with for quite a while):

_"Start one draft every three days (regardless of the completion of the previous one) and put down at least four bullet points per day, one draft or more."_

It made a lot of sense, from the very beginning. But then, the inevitable writer’s block hit—what should I write about? How should I write about it? Do I know enough?

2. **Writing is basically just talking on paper, almost.**

What helped me climb out of my writer's block (where dreams go to die, just kidding.) actually came from hearing about Hrishi's project Lumentis. Lumentis is an application Hrishi built and it does a simple, but life-changing thing.

You can record a meeting, or more usefully for me, yourself talking in your walks or runs, and then have Lumentis create your mumbo-jumbo ideas into a beautifully crafted documentation - I mean, ideas in aesthetic forms, who doesn't want that?

> [!note] Another Cool Project
> Here's [Lumentis](https://github.com/hrishioa/lumentis). Give it a go, I love it.

That actually made me overcome a big part of my writer's blog.

In a world where Lumentis exists, I'm basically writing every day. It can't be that hard.

3. **Put it out there - for the hype**

Sharing what I wrote really helped, no matter what stage it's at. I largely felt reluctant to put out a raw form of thoughts out there for world to see.

To have someone read what I wrote, and encourage me to put it out there, whether it be a simple linkedin post or a shared Notion page where you know you have an audience, really hyped up writing for me.

It also helped to feel the excitement that there are people who want to write, and potentially, an entire community of friends ping-pong-ing with their fascinating thoughts.

This gave me a great headspace to write more aggressively, which brought me back to my long-awaited items in the bucket list. It felt like a good opportunity to cross out the two items in my bucket list at once.

Leveraging one of my favorite blog posts, I decided to create a blog.

It was overall pretty simple, just took a lot of time figuring out where and how to start.

This is why I decided to write this particular post, for those out there who has never built a website, but like the aesthetics of this one, and want to build it yourself.

---

## Part 2: How I Built this Website

I did look into some other platforms - like Wix or Substack and whatnot.

In the end, I decided to build a custom blog using Vercel, simply because of 2 reasons:

- I wanted more control over how the blog looked. Essentially I wanted a really simple blog where I will only add more features and asethetic elements whenever it felt apt.

  (A side thought, I feel like it helps to feel attached to your writings, and that's why I always felt fond of custom blogs.)

- I wanted to learn how to build a website.

I can read and modify code, but a total beginner in the world of building. I'm writing down this experience for anyone who has not built before.

## 1. Create a project in your local envrionment

Choose a preferred framework (e.g., Next.js, React, Vue.js).

I chose Next.js.

### (1) Set up your development environment

So, make sure you have Node.js installed on your computer. You can download it from nodejs.org.

<CalloutBox type="note" heading="Open the Terminal">
 - On Windows: Press Win + R, type "cmd" and press Enter.
 - On macOS: Press Cmd + Space, type "Terminal" and press Enter.
 - On Linux: The method varies by distribution, but you can usually press Ctrl + Alt + T. </CalloutBox>

How to check if you have Node.js installed? (Maybe you don't remember):

```
node --version
```

If Node.js is installed, you'll see a version number displayed, like this: v18.16.0.

If it's not installed, an error message would pop up. In that case, you can
download and install it from the official Node.js website (https://nodejs.org/).
The LTS (Long Term Support) version is recommended, apparently.
Of course, to verify that the installation was successful, you can run the node --version command again.

### (2) Create a new Next.js project

Open your terminal and run:

```
npx create-next-app@latest my-blog
cd my-blog
```

> [!note] Useful terminal interjection #1
> "cd" to enter a folder.
>
> "cd .." to exit and return to the parent folder.
>
> "ls" to see what's inside the folder.

Then, it will ask you bunch of configuration questions.

✔ _Would you like to use TypeScript?_ … Yes, easier.

It's a typed superset of JavaScript that helps catch errors early and improves code quality.

✔ _Would you like to use ESLint?_ … Yes, easier too.

It's a tool that identifies and reports on patterns in JavaScript, helping maintain code quality and consistency.

✔ _Would you like to use Tailwind CSS?_ … Yes, I found it useful.

It's a CSS framework that allows quick UI development with pre-built classes.

✔ _Would you like to use** `src/` **directory?_ … I said no, but personal preference for how to structure folders.

It's an optional structure that places all your source code in a 'src' folder for better organization.

✔ _Would you like to use App Router? (recommended)_ … Yes, routing feature is cool.

Next.js 13+ feature that provides a new file-system based router with enhanced features and improved performance.

✔ _Would you like to customize the default import alias (@/\*)?_ … No, simply because I wanted minimal configuration effort, if not cruicial.

A shortcut for importing modules, typically set to the root of your project for easier and cleaner imports.

That's it, you just got yourself a few toolkits.

### (3) Create blog structure

I will be assuming your configuration looks like mine.

With App Router option you chose above, your folders would look something like this:

```
my-blog/
├── app/
├── public/
├── package.json
├── tsconfig.json
└── ...
```

Here are some commands to run to make necessary directories and files:

```
mkdir -p app/posts
touch app/layout.tsx app/page.tsx
mkdir components
touch components/PostList.tsx
```

And then, once done, separately:

```
mkdir -p 'app/posts/[slug]'
touch 'app/posts/[slug]/page.tsx'
```

This will give you something like this:

```
my-blog/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx
├── components/
│   └── PostList.tsx
├── public/
├── package.json
└── tsconfig.json
```

> [!note] Useful terminal interjection #2
> Delete the entire line:
>
> - On macOS and Linux: Press Ctrl + U
> - On Windows: Press Esc
>
> Clear the entire screen (this doesn't delete the input, but gives you a clean slate):
>
> - On most systems: Type `clear` and press Enter
> - On Windows Command Prompt: Type `cls` and press Enter

### (4) Add some content to the file

#### 1.app/layout.tsx

This file will determine the layout of your blog. Later on, as you add more things, you can create a separate file for complicated designs, and link it to this main layout.tsx file with import function. (Just how in the code below, we are calling in stylistic features from globals.css, also created under "app" folder.)

```typescript
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minune",
  description: "Untimely Meditations from Minune",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-2xl mx-auto px-4">
        <header className="py-4">
          <nav>
            <a href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="py-4 mt-8 text-center text-gray-500">
          © {new Date().getFullYear()} My Blog
        </footer>
      </body>
    </html>
  );
}
```

#### 2.app/page.tsx

This file fetches your "posts" (Individual blog articles or sub-pages).

```typescript
import PostList from "../components/PostList";

export default function Home() {
  // For now, we'll use dummy data. Later, we'll fetch real posts.
  const posts = [
    {
      slug: "first-post",
      title: "My First Post",
      excerpt: "This is my very first blog post!",
    },
    {
      slug: "second-post",
      title: "Another Post",
      excerpt: "Here's another interesting post.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Minune</h1>
      <PostList posts={posts} />
    </div>
  );
}
```

#### 3. components/PostList.tsx

This file grabs a list of your articles.

```typescript
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className="block hover:bg-gray-100 p-4 rounded"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

#### 4. app/posts/[slug]/page.tsx

This file sets up your individual article page.

```typescript
export default function Post({ params }: { params: { slug: string } }) {
  // For now, we'll just display the slug. Later, we'll fetch the actual post content.
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Post: {params.slug}</h1>
      <p>This is where the content for {params.slug} will go.</p>
    </div>
  );
}
```

Yay! And we now have a home page and individual sub-pages, almost.

### (5) Now, set up a routing system

You probably want to just write, and have your website your content in without having to do something each time.

#### 1. Create a directory for your blog posts.

<CalloutBox type="note" heading="Useful terminal interjection #3">
Run all commands in your root directory (In our case, "my-blog")
</CalloutBox>

```
mkdir -p app/_posts
```

#### 2. Create a couple of sample markdown files for your blog posts

```
touch app/_posts/first-post.md app/_posts/second-post.md
```

#### 3. Put some words in the markdown files

This way, it would be easier to check the setup.

```
---
title: 'My First Blog Post'
date: '2024-08-20'
---

# Hello world!

I'm excited to be making this!
```

Do the same for the second one - always helpful to check the setup with two, or three, for that matter.

Now, why write in markdown files? It's easier for our website to process it.

#### 4. So, we will install a package to help us parse markdown files

Run this in the terminal:

```
npm install gray-matter
```

What does it do?

#### 5. Similarly, we'll make a utility function to read and parase markdown files.

Create a new folder:

```
mkdir -p app/lib
```

And then a new file:

```
touch app/lib/posts.ts
```

Then, populate it with something like this:

> [!note] Useful terminal interjection #4
> You can directly add content in the terminal by using a text editor like nano:
>
> nano app/lib/posts.ts

Anways, pouplate it, whether from the file opened from folder or the terminal:

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/_posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
```

Now, your folder structure would look something like this:

```
my-blog/
├── app/
│   ├── _posts/
│   │   ├── first-post.md
│   │   └── second-post.md
│   ├── lib/
│   │   └── posts.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── posts/
│       └── [slug]/
│           └── page.tsx
├── components/
│   └── PostList.tsx
└── ... (other files and directories)
```

### (6) We'll have the main page to display the actual posts

This means we'll get to use function getSortedPostsData(), the one we just defined in our app/lib/posts.ts, in our app/page.tsx file.

#### 1. Open the `app/page.tsx` file.

Replace the existing content with the following:

```typescript
import { getSortedPostsData } from "./lib/posts";
import PostList from "../components/PostList";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
      <PostList posts={posts} />
    </div>
  );
}
```

#### 2. We also need to update our components/PostList.tsx.

Open it, and replace the content with this:

```typescript
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  date: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`/posts/${post.id}`}
            className="block hover:bg-gray-100 p-4 rounded"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.date}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

This will fetch the actual blog posts from our markdown files and display them on the main page.

#### 3. Then, we'll update our individual blog post page to have actual content.

Open `app/posts/[slug]/page.tsx` and replace its content with:

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Post({ params }: { params: { slug: string } }) {
  const fullPath = path.join(process.cwd(), "app/_posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-500 mb-4">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
```

This will display the full content of each blog post on its individual page.

That's it, really!

## 2. Play with it

Before you deploy your blog, you would want to make chagnes.

You can test it as you make changes by running this in your terminal:

```
npm run dev
```

> [!note] Useful terminal interjection #5
> If you want to exit development server, use these:
>
> - On macOS: Press Control + C
> - On Windows/Linux: Press Ctrl + C
>
> When you exit, the blog won't be accessible at localhost:3000 until you start it again with `npm run dev`.

Once it runs, open your browser and go to `http://localhost:3000`.

That's where you can see your new born child in its full glory.

### Debugging Tools

Well, you might run into some problems, in which case, add debugging tools!

Depending on where you're seeing the issues, modify your files:

1. app/page.tsx with debugging information

```typescript
import { getSortedPostsData } from "./lib/posts";
import PostList from "../components/PostList";

export default function Home() {
  const posts = getSortedPostsData();
  console.log("Posts:", JSON.stringify(posts, null, 2)); // More detailed logging

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
      {posts.length > 0 ? <PostList posts={posts} /> : <p>No posts found.</p>}
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        {JSON.stringify(posts, null, 2)}
      </pre>
    </div>
  );
}
```

2. components/PostList.tsx with debugging information

```typescript
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  date: string;
};

export default function PostList({ posts }: { posts: Post[] }) {
  console.log("PostList received posts:", posts); // Add this line for debugging

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`/posts/${post.id}`}
            className="block hover:bg-gray-100 p-4 rounded"
          >
            <h2 className="text-xl font-bold">{post.title || "No title"}</h2>
            <p className="text-gray-600">{post.date || "No date"}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

3. app/lib/posts.tsx with debugging information

```typescript
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/_posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    console.log(`Parsing ${fileName}:`, matterResult.data); // Add this line for debugging

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title || "No title", // Provide default values
      date: matterResult.data.date || "No date",
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
```

This will tell you where things are funky.

Honestly, at this stage, there are only a few things that can go wrong:

1. The markdown files are NOT being read correctly
2. The frontmatter is NOT being parsed properly
3. The title and date are NOT being extracted from the frontmatter

I noticed that sometimes clearing browser cache helps, or restarting the development server with good ol'

```
npm run dev.
```

Once you like what you're seeing at http://localhost:3000, then you can start adding more stuff.

If a particular page seems to be a problem, you can try if you can acess that page (e.g. http://localhost:3000/first-post) to see what's up.

## 3. Deploy!

1. ### Push your project to a GitHub repository

#### (1) Create repo!

- In your Github, click on the **+** icon in the upper right corner and select **New repository**.
- Name your repository (e.g., `my-blog`), add a description if you want, and choose public or private. No need for additional things like REDAME, as you already have a full thing set up.
- Creat the repo!

#### (2) Initialize a git repository in your project directory, my-blog folder.

```
git init
```

#### (3) Add your files to repo

```
git add .
```

#### (4) Commit changes

```
git commit -m "Initial commit"
```

#### (5) Link local repo to the Github repo

```
git remote add origin git@github.com:your-username/[repo-name].git
```

### 2. Run Vercel - I used npx to run it.

```
npx vercel
```

Some questions it might start asking:

- When asked "Set up and deploy "~/path/to/your/project"?" Yes, I'm here for that.
- When asked "Link to existing project?" Nope, didn't want to link.
- For "What's your project's name?" Fun name - minune!
- For "In which directory is your code located?", press Enter to use the current directory (./), unless your code is in a subdirectory.

### 3. Debugging

For any errors, try building your project locally again by running:

```
npm run build
```

It will tell you what's up. Sort that out, and then run `npx vercel` again.

### 4. Deployed!

If no issue, you would have successfully deployed!

For any changes (mostly your new articles) you make once the blog is live, simply need to repeat:

```
git add .
```

```
git commit -m "Description of your changes"
```

```
git push
```

```
npx vercel —prod
```

---

## Part 3: Quick Wrapup

I wrote this because I wanted to remember what confused me the first time.

Claude as always is really helpful, ask it for any funky behaviours!

When asking, useful to provide the folder structure tree, like this one:

```
my-blog/
├── app/
│   ├── _posts/
│   │   ├── first-post.md
│   │   └── second-post.md
│   ├── lib/
│   │   └── posts.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── posts/
│       └── [slug]/
│           └── page.tsx
├── components/
│   └── PostList.tsx
└── ... (other files and directories)
```

That said, this is me getting pretty excited to write more, and stack it in this new blog.

> [!tip] Briefly on the Name of the Blog
> Briefly on the name of the blog, if anyone's interested:
>
> Minu is obviously my name, Minune (미누네) in Korean is Minu's place.
>
> Very randomly, Minune in Romanian means wonderful, so there's that ;)
