# Notes App Specification

## Repository Structure

Kode aplikasi disimpan di repository `notes-app`, sehingga dapat di-install ulang kapan saja dengan melakukan clone/pull dari repository tersebut. Sementara itu, data dokumen disimpan secara terpisah di repository `notes-data`.

## Service Management

Service notes-app dipasang di PC Linux user dan dikonfigurasi untuk autostart saat PC dinyalakan serta automatic restart ketika service mengalami crash.

## Sidebar Style

Sidebar ditempatkan di sisi kiri layar dan dimulai dalam kondisi kosong.

- **Lebar**: 250px [TBD]
- **Background/warna**: #ffffff [TBD]

## Sidebar Sections

Sidebar memiliki 3 sections:

**Section 1**:
- **Title**: Recent [TBD]
- **Style**:
  - Font family: system-ui [TBD]
  - Font size: 13px [TBD]
  - Item height: 28px [TBD]
  - Item padding: 4px 8px [TBD]
  - Item background: transparent [TBD]
  - Item text color: #ccc [TBD]
  - Item timestamp color: #666 [TBD]
- **Sort**: Newest first
- **Behavior**: Stacked (tidak expandable/collapsible).

**Section 2**:
- **Title**: Notes [TBD]
- **Style**:
  - Font family: system-ui [TBD]
  - Font size: 13px [TBD]
  - Item height: 28px [TBD]
  - Item padding: 4px 8px [TBD]
  - Folder background: transparent [TBD]
  - Folder text color: #aaa [TBD]
  - Document icon color: #888 [TBD]
  - Nested indent: 16px [TBD]
- **Sort**: Alphabetically (folder first, baru dokumen)
- **Behavior**: Stacked. Folder default collapsed.

**Section 3**:
- **Title**: Trash [TBD]
- **Style**:
  - Font family: system-ui [TBD]
  - Font size: 13px [TBD]
  - Item height: 28px [TBD]
  - Item padding: 4px 8px [TBD]
  - Item text color: #666 [TBD]
  - Item timestamp color: #888 [TBD]
- **Sort**: Waktu hapus (newest first)
- **Behavior**: Default collapsed.

## Tech Stack

- **Block Editor**: BlockSuite [TBD]
- **Frontend**: React [TBD]
- **Language**: TypeScript [TBD]
- **Git Integration**: isomorphic-git [TBD]
- **Styling**: Tailwind CSS [TBD]
