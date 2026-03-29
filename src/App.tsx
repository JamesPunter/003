import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import BusinessPage from '@/pages/BusinessPage'
import GalleryPage from '@/pages/GalleryPage'
import ContactPage from '@/pages/ContactPage'
import HelpdeskPage from '@/pages/HelpdeskPage'
import ReviewsPage from '@/pages/ReviewsPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="bedrijfsinformatie" element={<AboutPage />} />
        <Route path="helpdesk" element={<HelpdeskPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="bedrijven" element={<BusinessPage />} />

        <Route path="gallerij" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
