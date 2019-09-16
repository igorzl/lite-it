# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(email: "igor@igor.com", password: "123456", fname: "John", lname: "Brown")
prj = Project.new(name: "Inspired", description: "Inspired by sea in the morning", user: user)
user.save
prj.save
cnv = Canvas.new(name: "First canvas", description: "There is no photo", project: prj)
cnv.save
