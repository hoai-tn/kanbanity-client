const boards = {
  boards: [
    {
      boardId: "board-123",
      title: "Project A",
      members: [
        {
          memberId: "user-1",
          name: "Hoai",
          email: "hoai@example.com",
          role: "admin",
        },
        {
          memberId: "user-2",
          name: "Alice",
          email: "alice@example.com",
          role: "member",
        },
      ],
      Columns: [
        {
          columnId: "column-001",
          title: "To Do",
          tasks: [
            {
              taskId: "task-101",
              title: "Set up database",
              description:
                "Create a scalable database structure for the Kanban board.",
              members: ["user-1", "user-2"],
              labels: ["Backend", "High Priority"],
              dueDate: "2024-01-05",
              attachments: [
                {
                  attachmentId: "attach-1",
                  name: "Schema.png",
                  url: "https://example.com/schema.png",
                },
              ],
              checklist: [
                {
                  checklistId: "check-001",
                  title: "Database Setup column",
                  items: [
                    {
                      itemId: "item-1",
                      text: "Define tables",
                      completed: true,
                    },
                    {
                      itemId: "item-2",
                      text: "Create relationships",
                      completed: false,
                    },
                  ],
                },
              ],
              comments: [
                {
                  commentId: "comm-001",
                  author: "Hoai",
                  content: "Ensure indexes are optimized.",
                  timestamp: "2024-12-31T12:00:00Z",
                },
              ],
            },
          ],
        },
        {
          columnId: "column-002",
          title: "In Progress",
          tasks: [],
        },
        {
          columnId: "column-003",
          title: "Done",
          tasks: [],
        },
      ],
    },
  ],
};

export default boards;
