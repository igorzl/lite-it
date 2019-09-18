# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts "Cleaning canvases.."
Canvas.delete_all
puts "Cleaning projects.."
Project.destroy_all
# puts "Cleaning users.."
# User.delete_all

# user = User.create(email: "igor@igor.com", password: "123456", fname: "John", lname: "Brown")
# user.save

# puts "Adding some users..."
# 3.times do
#   email = Faker::Internet.unique.email
#   fname = Faker::Name.unique.first_name
#   lname = Faker::Name.unique.last_name

#   User.create!(email: email, fname: fname, lname: lname, password: '123456')
# end

# # prj = Project.new(name: "Inspired", description: "Inspired by sea in the morning", user: user)
# # prj.save

# cnv = Canvas.new(name: "First canvas", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 2", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 3", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 4", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
# cnv.remote_photo_url = url
# cnv.save

# # prj = Project.new(name: "Rejected", description: "My black and white portraits of actors in studios across the US", user: user)
# # prj.save


# cnv = Canvas.new(name: "First canvas", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 2", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 3", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 4", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
# cnv.remote_photo_url = url
# cnv.save

# # prj = Project.new(name: "Forget It", description: "Would still love to do some more before the end of the year", user: user)
# # prj.save


# cnv = Canvas.new(name: "First canvas", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 2", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 3", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 4", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
# cnv.remote_photo_url = url
# cnv.save

# # prj = Project.new(name: "Love It", description: "Meeting Aimee Phillips regarding this on November 15th", user: user)
# # prj.save


# cnv = Canvas.new(name: "First canvas", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 2", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 3", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
# cnv.remote_photo_url = url
# cnv.save

# cnv = Canvas.new(name: "Try 4", description: "There is no photo", project: prj)
# url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
# cnv.remote_photo_url = url
# cnv.save

puts "Creating 10 projects"
project_names = [
  "032719_British Vogue", "051119_WSJ", "022519_W Magazine", "080319_Paris Vogue", "121718_WSJ",  "121218_Femme", "092718_Cosmopolitan", "062119_ID Magazine", "041118_Brazilian Vogue", "01312019_Harpers Bazaar", "082518_Vogue"]

photos = ["https://www.artandcommerce.com/Doc/AAC/Media/TR1_COMP/47/34/96/c7/ACR53738.jpg",
  "https://assets.lookbookspro.com/judycasey2-1/gxxl_52b8853f-e5d0-4221-bbd2-7d350af4b6c2.jpg",
  "https://66.media.tumblr.com/109814ad4892deae207aa3ccef26ed05/tumblr_pa7lpfDz0f1r6xexno1_1280.jpg",
  "https://schweizerkulturundfreizeit.files.wordpress.com/2017/01/24ffd-aac386994.jpg",
  "https://1.bp.blogspot.com/-SFigvcDDpHM/VwjBuFx1nUI/AAAAAAAEqDI/7RHZy9DG3TkBUG_nE0vSKWr-NbBE1MSIw/s1600/Susan_Sarandon-INTERVIEW-April_2016-005.jpg",
  "https://media.wmagazine.com/photos/5d4d6259f0adfe0008a905cf/master/pass/WM201904BEAU02_largeNoWatermark.jpg",
  "https://scontent-lax3-1.cdninstagram.com/vp/2c1e3cc4e656ee38fc089365b33ac3ce/5D8859F2/t51.2885-15/e35/60099110_120676989144499_5724427234911167929_n.jpg?_nc_ht=scontent-lax3-1.cdninstagram.com&se=7&ig_cache_key=MjA1MzkxNzM2NjU0MDAxOTIwMg%3D%3D.2",
  "https://media.newyorker.com/photos/5c1bdefe7e716b4545919da1/master/pass/Shot_01_035_First_Choice.jpg",
  "https://media.wmagazine.com/photos/5d65ab2b7dc985000943abe5/master/pass/WM201906INEZ01.jpg",
  "http://ultimate-rihannas.com/gallery/albums/userpics/10735/006~5.jpg",
  "https://images.squarespace-cdn.com/content/v1/55f45174e4b0fb5d95b07f39/1564869761998-ADQGOVL02H22Z9QPN95C/ke17ZwdGBToddI8pDm48kHRrgb6Xx4NxFfr0H-OxbzlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpy6KnAStM7AGPNxOGtdbFnmL2KGWa2-djY9q0QACo6dftnLVjo0X9rXRpJT_BiD204/Anok+Yai+Alton+Mason+for+Vogue+Brasil+August+2019++%2812%29.jpg"
]
11.times do |i|
  name = project_names[i]
  description = Faker::Lorem.paragraph(sentence_count: 3)
  image = photos[i]
  Project.create!(name: name, description: description, remote_image_url: image, user: User.first)
end

project = Project.find_by(name: "041118_Brazilian Vogue")

description = "My outdoor shoot for spring. General lighting set up. Would still love to do some more before the end of the year. Shooting Hasselblad with a digital back. Retouching @ Dtouch, 15 west 12th street (contact Sandra). Meeting Michele and Gabriele regarding this on November 15th. Still need to set up time and place. Show 15 - 20 selects to review"

canvas = Canvas.create!(project: project, description: description, name: "Green Fields", remote_photo_url: 'https://66.media.tumblr.com/e287c849069799c3f35230aeecfe868c/tumblr_pxfq3nA9yH1wqm65mo1_1280.jpg')
canvas = Canvas.create!(project: project, description: description, name: "Green Fields", remote_photo_url: 'https://www.thefashionisto.com/wp-content/uploads/2019/08/Alton-Mason-2019-Vogue-Brasil-008.jpg')
canvas = Canvas.create!(project: project, description: description, name: "Green Fields", remote_photo_url: 'https://66.media.tumblr.com/a7de80dd0f4261cfb179f814622928ac/tumblr_pvooa14vRl1wqm65mo1_1280.jpg')

puts "done creating projects"

