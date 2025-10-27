# Documentation Corrections - Current Capabilities

## Summary
Updated documentation to accurately reflect current feature support and removed references to features not yet implemented.

---

## ✅ Changes Made

### 1. **Overview Section**
- **Removed**: Word documents (.docx) as directly supported
- **Removed**: YouTube URLs as directly supported
- **Added**: Callout box explaining upcoming features
- **Clarified**: Video/audio uploads require files, not URLs

### 2. **Word Documents Section**
- **Changed**: From "supported" to "convert to PDF first"
- **Added**: Step-by-step conversion instructions
- **Added**: Warning callout about lack of direct support
- **Added**: Online converter recommendations

### 3. **Video Upload Section**
- **Removed**: YouTube URL import instructions
- **Changed**: To file upload process
- **Added**: Download instructions for YouTube videos
- **Added**: Supported video formats (MP4, AVI, MOV, MKV)
- **Added**: "Coming Soon" callout for YouTube URL feature

### 4. **Audio Upload Section**
- **Changed**: Transcription service from AssemblyAI to Whisper API
- **Updated**: Requirements to mention backend service

---

## 📋 Current Accurate Support List

### ✅ Fully Supported:
- PDF files (.pdf)
- Text files (.txt, .md)
- CSV files (.csv)
- Video files (.mp4, .avi, .mov, .mkv) - **requires file upload**
- Audio files (.mp3, .wav, .m4a, .ogg) - **requires file upload**
- Web pages - **URL import only** (not videos)

### ⚠️ Workarounds Required:
- **Word Documents**: Convert to PDF first
  - Tools: Microsoft Word, pdf.io, Smallpdf, CloudConvert

- **YouTube Videos**: Download first, then upload
  - Tools: 4K Video Downloader, yt-dlp

### 🔜 Coming Soon (Mentioned in Docs):
- Direct Word document (.docx, .doc) upload
- Direct YouTube URL import
- More third-party integrations

---

## 📝 Callout Boxes Added

### Info Callout (Top of page):
```
Coming Soon: Direct Word document (.docx) upload and YouTube URL import
are planned for future releases. For now, convert Word documents to PDF
and download videos before uploading.
```

### Warning Callout (Word section):
```
Word documents (.docx, .doc) are not directly supported yet.
To use Word documents, convert them to PDF first.
```

### Warning Callout (Video section):
```
YouTube URL import is not yet supported. To use videos, download them
first and upload the video file directly.
```

### Info Callout (End of Video section):
```
Coming Soon: Direct YouTube URL import will be added in a future release,
eliminating the need to download videos manually.
```

---

## 🎯 Impact

### Benefits:
- ✅ Users won't expect unsupported features
- ✅ Clear workarounds provided
- ✅ Sets expectations for future releases
- ✅ Reduces support requests
- ✅ Maintains transparency

### User Experience:
- Users know exactly what works today
- Workarounds are clearly documented
- Future features are communicated
- No confusion or disappointment

---

## 🚀 Next Steps

1. **Deploy these changes**:
   ```bash
   git add pages/docs/user-guide/uploading-documents.mdx
   git commit -m "docs: update supported file types and clarify workarounds"
   git push origin main
   ```

2. **Consider adding**:
   - FAQ section addressing common questions
   - Video tutorial showing workarounds
   - Roadmap page showing planned features

3. **Monitor**:
   - GitHub issues for feature requests
   - User feedback about workarounds
   - Analytics on documentation page views

---

## 📄 File Modified:
- `pages/docs/user-guide/uploading-documents.mdx`

## Lines Changed:
- Overview section (lines 5-20)
- Word documents section (lines 103-127)
- Video upload section (lines 191-238)
- Audio upload section (lines 249-261)
