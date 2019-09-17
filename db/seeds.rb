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
Project.delete_all
puts "Cleaning users.."
User.delete_all

user = User.create(email: "igor@igor.com", password: "123456", fname: "John", lname: "Brown")
user.save

puts "Adding some users..."
3.times do
  email = Faker::Internet.unique.email
  fname = Faker::Name.unique.first_name
  lname = Faker::Name.unique.last_name

  User.create!(email: email, fname: fname, lname: lname, password: '123456')
end

prj = Project.new(name: "Inspired", description: "Inspired by sea in the morning", user: user)
prj.save

cnv = Canvas.new(name: "First canvas", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 2", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 3", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 4", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
cnv.remote_photo_url = url
cnv.save

prj = Project.new(name: "Rejected", description: "My black and white portraits of actors in studios across the US", user: user)
prj.save


cnv = Canvas.new(name: "First canvas", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 2", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 3", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 4", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
cnv.remote_photo_url = url
cnv.save

prj = Project.new(name: "Forget It", description: "Would still love to do some more before the end of the year", user: user)
prj.save


cnv = Canvas.new(name: "First canvas", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 2", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 3", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 4", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
cnv.remote_photo_url = url
cnv.save

prj = Project.new(name: "Love It", description: "Meeting Aimee Phillips regarding this on November 15th", user: user)
prj.save


cnv = Canvas.new(name: "First canvas", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 2", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 3", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568725058/orhrn6kqnkgiqcqaiesf.jpg"
cnv.remote_photo_url = url
cnv.save

cnv = Canvas.new(name: "Try 4", description: "There is no photo", project: prj)
url = "https://res.cloudinary.com/dfqbormfp/image/upload/v1568722181/xvneine8cvqjyawhr2tr.jpg"
cnv.remote_photo_url = url
cnv.save

