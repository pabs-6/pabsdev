export interface CvDownload {
  lang: 'es' | 'en'
  labelEs: string
  labelEn: string
  href: string
  fileName: string
}

export const cvDownloads: CvDownload[] = [
  {
    lang: 'es',
    labelEs: 'Español',
    labelEn: 'Spanish',
    href: '/cv/CV_Pablo_Serrano.pdf',
    fileName: 'CV_Pablo_Serrano.pdf',
  },
  {
    lang: 'en',
    labelEs: 'Inglés',
    labelEn: 'English',
    href: '/cv/CV_Pablo_Serrano_EN.pdf',
    fileName: 'CV_Pablo_Serrano_EN.pdf',
  },
]
