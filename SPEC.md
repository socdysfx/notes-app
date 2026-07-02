# Notes App Specification

## Aturan Penulisan

- Setiap baris hanya boleh memiliki 1 poin
- Setiap baris tidak boleh menggabungkan TBD dengan non-TBD dalam 1 baris
- Setiap TBD selalu diikuti nilainya saat ini (contoh: `Title: [TBD]` → `Title: Recent [TBD]`)

## Repository Structure

- Kode aplikasi disimpan di repository `notes-app`
- Data dokumen disimpan di repository `notes-data`
- notes-app dapat di-install ulang dengan clone/pull dari repository

## Service Management

- Service dipasang di PC Linux user
- Konfigurasi autostart saat PC dinyalakan
- Automatic restart ketika service crash

## Sidebar Style

- Posisi: sisi kiri layar
- Status awal: kosong
- Lebar: 250px [TBD]
- Background: #ffffff [TBD]
- Border: #e5e4e7 [TBD]
- Position: sticky [TBD]
- Top: 0 [TBD]
- Display: flex [TBD]
- Flex direction: column [TBD]
- Font family: system-ui [TBD]
- Font size: 13px [TBD]
- Color: #333 [TBD]

## Sidebar Sections

Sidebar memiliki 3 sections.

### Section 1

- Title: Recent [TBD]
- Sort: Newest first
- Behavior: Stacked (tidak expandable/collapsible)
- Font family: system-ui [TBD]
- Font size: 13px [TBD]
- Item height: 28px [TBD]
- Item padding: 4px 8px [TBD]
- Item background: transparent [TBD]
- Item text color: #ccc [TBD]
- Item timestamp color: #666 [TBD]
- Timestamp position: right-aligned
- Border radius: 3px [TBD]
- Display: flex [TBD]
- Gap: 8px [TBD]
- Cursor: pointer [TBD]
- Icon width: 16px [TBD]
- Icon height: 16px [TBD]
- Icon color: #888 [TBD]
- Item info display: flex [TBD]
- Item info flex direction: row [TBD]
- Item info justify content: space-between [TBD]
- Item info align items: center [TBD]
- Item info flex: 1 [TBD]
- Overflow: hidden [TBD]
- Text overflow: ellipsis [TBD]
- White space: nowrap [TBD]

### Section 2

- Title: Notes [TBD]
- Sort: Alphabetically (folder first, baru dokumen)
- Behavior: Stacked. Folder default collapsed
- Font family: system-ui [TBD]
- Font size: 13px [TBD]
- Item height: 28px [TBD]
- Item padding: 4px 8px [TBD]
- Item background: transparent [TBD]
- Item text color: #ccc [TBD]
- Folder background: transparent [TBD]
- Folder text color: #aaa [TBD]
- Folder font size: 12px [TBD]
- Folder padding: 4px 8px [TBD]
- Folder border radius: 3px [TBD]
- Folder display: flex [TBD]
- Folder gap: 6px [TBD]
- Folder cursor: pointer [TBD]
- Folder icon width: 12px [TBD]
- Folder icon height: 12px [TBD]
- Folder icon color: #888 [TBD]
- Folder icon transition: transform 0.15s [TBD]
- Document icon color: #888 [TBD]
- Nested indent: 16px [TBD]
- Folder margin bottom: 2px [TBD]

### Section 3

- Title: Trash [TBD]
- Sort: Waktu hapus (newest first)
- Behavior: Default collapsed
- Nested tree structure: folder + document items
- Contains: Folders and documents
- Folder behavior: Expandable/collapsible, default collapsed
- Font family: system-ui [TBD]
- Font size: 13px [TBD]
- Item height: 28px [TBD]
- Item padding: 4px 8px [TBD]
- Item text color: #666 [TBD]
- Item timestamp: Tidak ditampilkan
- Item border radius: 3px [TBD]
- Item display: flex [TBD]
- Item gap: 8px [TBD]
- Item cursor: pointer [TBD]
- Icon width: 16px [TBD]
- Icon height: 16px [TBD]
- Icon color: #888 [TBD]
- Item info display: flex [TBD]
- Item info flex direction: column [TBD]
- Item info flex: 1 [TBD]
- Overflow: hidden [TBD]
- Text overflow: ellipsis [TBD]
- White space: nowrap [TBD]

## Section Header Style

- Padding: 6px 10px [TBD]
- Display: flex [TBD]
- Align items: center [TBD]
- Justify content: space-between [TBD]
- Cursor: pointer [TBD] (static untuk Recent & Notes, pointer untuk Trash)
- User select: none [TBD]
- Hover background: #f5f5f5 [TBD]
- Title font size: 10px [TBD]
- Title font weight: 600 [TBD]
- Title color: #666 [TBD]
- Title text transform: uppercase [TBD]
- Title letter spacing: 0.5px [TBD]
- Toggle width: 12px [TBD]
- Toggle height: 12px [TBD]
- Toggle color: #999 [TBD]
- Toggle transition: transform 0.2s [TBD]

## Section Style

- Border bottom: 1px solid #e5e4e7 [TBD]
- Content padding: 2px 8px 6px [TBD]

## Item Hover Style

- Background: #f5f5f5 [TBD]
- Color: #000 [TBD]

## Trash Item Hover

- Title color: #cc0000 [TBD]

## Main Content Style

- Flex: 1 [TBD]
- Min height: 100vh [TBD]
- Background: #ffffff [TBD]

## Item Icon Style

- Folder dan dokumen masing-masing menggunakan icon yang berbeda [NEW]
- Folder icon: folder deh [TBD] [NEW]
- Document icon: document deh [TBD] [NEW]
- Icon berlaku untuk Recent, Notes, dan Trash section [NEW]

## Tech Stack

- Block Editor: BlockSuite [TBD]
- Frontend: React [TBD]
- Language: TypeScript [TBD]
- Git Integration: isomorphic-git [TBD]
- Styling: Tailwind CSS [TBD]
