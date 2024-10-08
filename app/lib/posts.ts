import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'app/_posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string; subtitle?: string; completed: boolean }),
      completed: matterResult.data.completed ?? true // Default to true if not specified
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getRelatedPosts(currentPostId: string, count: number = 4): PostData[] {
  const allPosts = getSortedPostsData()
  return allPosts
    .filter(post => post.id !== currentPostId && post.completed)
    .slice(0, count)
}

// Updated type definition for the post data
export type PostData = {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  completed: boolean;
}
