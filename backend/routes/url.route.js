import { Router } from 'express'
import { shortener, redirectUrl, getAllUrl } from '../controllers/url.controller.js'

const router = Router()

router.route('/api/shorten').post(shortener)
router.route('/:shortCode').get(redirectUrl)
router.route('/api/admin/urls').get(getAllUrl)

export default router