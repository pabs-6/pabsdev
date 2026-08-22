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
    href: '/cv/Pablo_Serrano_CV_ES.pdf',
    fileName: 'Pablo_Serrano_CV_ES.pdf',
  },
  {
    lang: 'en',
    labelEs: 'Inglés',
    labelEn: 'English',
    href: '/cv/Pablo_Serrano_CV_EN.pdf',
    fileName: 'Pablo_Serrano_CV_EN.pdf',
  },
]
