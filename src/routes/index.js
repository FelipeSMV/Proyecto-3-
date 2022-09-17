import {Router} from 'express'
const router = Router(); 
router.get ('/', (req, res) => res.render('index', {title: 'Bienvenido'}))

router.get ('/about', (req, res) => res.render('about', {title: 'Acerca de'}))

router.get ('/contact', (req, res) => res.render('contact', {title: 'Variedad '}))

router.get ('/LEER', (req, res)=> res.render('LEER'))

export default router; 