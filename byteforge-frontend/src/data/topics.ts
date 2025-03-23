import type { Topic } from "@/types";

export const topics: Topic[] = [
  {
    id: "java-basics",
    title: "Java Basics",
    description: "Learn the fundamentals of Java programming language",
    level: "Beginner",
    duration: "4 hours",
    topics: ["Variables & Data Types", "Operators", "Control Flow", "Arrays"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "oop-java",
    title: "Object-Oriented Programming",
    description: "Master object-oriented programming concepts in Java",
    level: "Intermediate",
    duration: "6 hours",
    topics: [
      "Classes & Objects",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
    ],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "java-collections",
    title: "Java Collections Framework",
    description: "Explore Java's built-in data structures",
    level: "Intermediate",
    duration: "5 hours",
    topics: ["Lists", "Sets", "Maps", "Queues"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "exception-handling",
    title: "Exception Handling",
    description: "Learn how to handle errors and exceptions in Java",
    level: "Intermediate",
    duration: "3 hours",
    topics: [
      "Try-Catch Blocks",
      "Checked vs Unchecked",
      "Custom Exceptions",
      "Best Practices",
    ],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "java-io",
    title: "Java I/O & Files",
    description: "Work with files and I/O streams in Java",
    level: "Intermediate",
    duration: "4 hours",
    topics: ["File Handling", "Streams", "Readers & Writers", "NIO"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "multithreading",
    title: "Multithreading & Concurrency",
    description: "Build concurrent applications with Java threads",
    level: "Advanced",
    duration: "8 hours",
    topics: [
      "Threads",
      "Synchronization",
      "Executors",
      "Concurrent Collections",
    ],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: "multithreading",
    title: "Multithreading & Concurrency",
    description: "Build concurrent applications with Java threads",
    level: "Advanced",
    duration: "8 hours",
    topics: [
      "Threads",
      "Synchronization",
      "Executors",
      "Concurrent Collections",
    ],
    image: "/placeholder.svg?height=200&width=400",
  },
];
