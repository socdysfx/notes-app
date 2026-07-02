import './App.css'

interface NoteItem {
  id: string
  title: string
  timestamp?: string
  type: 'note' | 'folder'
  children?: NoteItem[]
}

interface RecentItem {
  id: string
  title: string
  timestamp: string
}

interface TrashItem {
  id: string
  title: string
  type: 'note' | 'folder'
  children?: TrashItem[]
}

const recentItems: RecentItem[] = [
  { id: '1', title: 'Meeting Notes', timestamp: '2 min ago' },
  { id: '2', title: 'Project Ideas', timestamp: '1 hour ago' },
  { id: '3', title: 'Shopping List', timestamp: '3 hours ago' },
]

const notesTree: NoteItem[] = [
  {
    id: 'folder-2',
    title: 'Personal',
    type: 'folder',
    children: [
      { id: 'note-4', title: 'Shopping List', timestamp: 'Jun 29, 2026', type: 'note' },
    ],
  },
  { id: 'note-5', title: 'Uncategorized Note', timestamp: 'Jun 28, 2026', type: 'note' },
  {
    id: 'folder-1',
    title: 'Work',
    type: 'folder',
    children: [
      { id: 'note-1', title: 'Meeting Notes', timestamp: 'Jul 2, 2026', type: 'note' },
      { id: 'note-2', title: 'Q4 Report', timestamp: 'Jul 1, 2026', type: 'note' },
      {
        id: 'folder-1-1',
        title: 'Subfolder',
        type: 'folder',
        children: [
          { id: 'note-3', title: 'Draft', timestamp: 'Jun 30, 2026', type: 'note' },
        ],
      },
    ],
  },
]

const trashItems: TrashItem[] = [
  {
    id: 'trash-folder-1',
    title: 'Old Projects',
    type: 'folder',
    children: [
      {
        id: 'trash-folder-1-1',
        title: 'Archived',
        type: 'folder',
        children: [
          { id: 'trash-3', title: '2024 Review', type: 'note' },
        ],
      },
      { id: 'trash-2', title: 'Old Draft', type: 'note' },
    ],
  },
  { id: 'trash-1', title: 'Temp Files', type: 'note' },
]

function sortTree(items: NoteItem[]): NoteItem[] {
  return [...items].sort((a, b) => {
    if (a.type === 'folder' && b.type === 'note') return -1
    if (a.type === 'note' && b.type === 'folder') return 1
    return a.title.localeCompare(b.title)
  }).map(item => ({
    ...item,
    children: item.children ? sortTree(item.children) : undefined
  }))
}

function sortTrashTree(items: TrashItem[]): TrashItem[] {
  return [...items].sort((a, b) => {
    if (a.type === 'folder' && b.type === 'note') return -1
    if (a.type === 'note' && b.type === 'folder') return 1
    return a.title.localeCompare(b.title)
  }).map(item => ({
    ...item,
    children: item.children ? sortTrashTree(item.children) : undefined
  }))
}

function TrashFolderItem({ item }: { item: TrashItem }) {
  const [collapsed, setCollapsed] = React.useState(true)
  const sortedChildren = item.children ? sortTrashTree(item.children) : []

  return (
    <div className="folder-item">
      <div
        className="folder-header"
        onClick={() => setCollapsed(!collapsed)}
      >
        <svg className="folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points={collapsed ? '9 18 15 12 9 6' : '6 9 12 15 18 9'} />
        </svg>
        <span className="folder-name">{item.title}</span>
      </div>
      {!collapsed && sortedChildren.length > 0 && (
        <div className="folder-children">
          {sortedChildren.map(child =>
            child.type === 'folder' ? (
              <TrashFolderItem key={child.id} item={child} />
            ) : (
              <div key={child.id} className="trash-item">
                <svg className="document-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <div className="item-info">
                  <span className="item-title">{child.title}</span>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}

function FolderItem({ item }: { item: NoteItem }) {
  const [collapsed, setCollapsed] = React.useState(true)
  const sortedChildren = item.children ? sortTree(item.children) : []

  return (
    <div className="folder-item">
      <div
        className="folder-header"
        onClick={() => setCollapsed(!collapsed)}
      >
        <svg className="folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points={collapsed ? '9 18 15 12 9 6' : '6 9 12 15 18 9'} />
        </svg>
        <span className="folder-name">{item.title}</span>
      </div>
      {!collapsed && sortedChildren.length > 0 && (
        <div className="folder-children">
          {sortedChildren.map(child =>
            child.type === 'folder' ? (
              <FolderItem key={child.id} item={child} />
            ) : (
              <div key={child.id} className="note-item">
                <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span className="note-title">{child.title}</span>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}

function TrashSection() {
  const [collapsed, setCollapsed] = React.useState(true)
  const sortedTrash = sortTrashTree(trashItems)

  return (
    <div className="section">
      <div className="section-header" onClick={() => setCollapsed(!collapsed)}>
        <span className="section-title">Trash</span>
        <svg className="section-toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points={collapsed ? '9 18 15 12 9 6' : '6 9 12 15 18 9'} />
        </svg>
      </div>
      {!collapsed && (
        <div className="section-content">
          {sortedTrash.map(item =>
            item.type === 'folder' ? (
              <TrashFolderItem key={item.id} item={item} />
            ) : (
              <div key={item.id} className="trash-item">
                <svg className="document-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <div className="item-info">
                  <span className="item-title">{item.title}</span>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}

function App() {
  const sortedNotes = sortTree(notesTree)

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="section">
            <div className="section-header static">
              <span className="section-title">Recent</span>
            </div>
            <div className="section-content">
              {recentItems.map(item => (
                <div key={item.id} className="recent-item">
                  <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <div className="item-info">
                    <span className="item-title">{item.title}</span>
                    <span className="item-timestamp">{item.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section">
            <div className="section-header static">
              <span className="section-title">Notes</span>
            </div>
            <div className="section-content">
              {sortedNotes.map(item =>
                item.type === 'folder' ? (
                  <FolderItem key={item.id} item={item} />
                ) : (
                  <div key={item.id} className="note-item">
                    <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span className="note-title">{item.title}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <TrashSection />
        </div>
      </aside>
      <main className="main-content"></main>
    </>
  )
}

import React from 'react'

export default App