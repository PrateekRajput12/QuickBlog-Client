# Step 1 :- Setup Project 
- create vite app 
- remove app.css 
- change title in html 
- clear app.jsx and do rafce 
- add your favicon
- import font in index.css (if needed)
- do ::-webkit-scrollbar {
  display: none;
} to remove scroll bar
- now setup tailwind CSS
- install react-router-dom
- remove strictmode in main.jsx
- and add browserrouter at that place by importing from react-router-dom
- setup git 

# Step-2 :- Create Component and Page folder
- create home.jsx and blog.jsx in page folder
- now go to app.jsx and Add <Routes> and in that add route in form of
 Route path='/' element={<Home />} 
 - Now go and create navBar 
 - for using images just import assest in assets folder and create assests.js for better import
 - create NavBar
 - create Header
 - After creating header and navbar start creating blog list

 # Step-3 :- BlogList Component & Add motion for animation
 - create bloglist component and make all neccessary things
 - npm i motion-framer
 - import motion from motion-framer
 - <motion.div
                                layoutId="underline" // ✅ Shared layout animation
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                className='absolute left-0 right-0 top-0 h-7 -z-10 bg-primary rounded-full'
                            />
- for animation in blog category

# Step-4 :- Footer,BlogCard,Newsletter (Home Page Completed )
- each component done using jsx and tailwind no dancy animation and all 
- Home Page Completed
