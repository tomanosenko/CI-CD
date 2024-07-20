/* eslint-disable */
const { I, AuthPage, LabelPage, TeamPage } = inject()

//----------Test4--------------------

Given('user opens login page', () => {
  I.amOnPage('login')
})

When('user enters credentials and click the button "Login"' , () => {
  AuthPage.FillName('Tomaaa')
  AuthPage.FillPassword('Pipipupuu')
  AuthPage.clickButton()
})

When('click the link "Teams"', () => {
  TeamPage.clickLinkTeam()
})

When('click the button "Create a team"', () => {
  TeamPage.newTeam()
})

When('fill the title of the team', () => {
  TeamPage.TeamTitle()
})

When('click the button "Create"', () => {
  TeamPage.createTeam()
})

Then('user creates the team successfully', () => {
  I.see('Изменить команду')
})

//----------Test5--------------------

Given('user opens login page', () => {
  I.amOnPage('login')
})

When('user enters credentials and click the button "Login"' , () => {
  AuthPage.FillName('Tomaaa')
  AuthPage.FillPassword('Pipipupuu')
  AuthPage.clickButton()
})

When('click the link "Teams"', () => {
  TeamPage.clickLinkTeam()
})

When('click the button "Team"', () => {
  TeamPage.clickTeam()
})

When('fill the name of the user', () => {
  TeamPage.AddUser()
})

When('click the button "Add to team"', () => {
  TeamPage.AddToTeam()
})

Then('the user adds a new user to the team successfully', () => {
  I.see('Участник')
})


//----------Test2--------------------

Given('user opens login page', () => {
  I.amOnPage('login')
})

When('user enters credentials and click the button {string}', () => {
  AuthPage.FillName('Tomaaa')
  AuthPage.FillPassword('Pipipupuu')
  AuthPage.clickButton()
})

When('click the link {string}', () => {
  LabelPage.clickLinkLabel()
})

When('click the button "New Label"', () => {
  LabelPage.newLabel()
})

When('fill the title of the label', () => {
  LabelPage.LabelTitle()
})

When('click the button "Create"', () => {
  LabelPage.createLabel()
})

Then('user creates the label successfully', () => {
  I.see("Label123")
})


//----------Test3--------------------

Given('user opens login page', () => {
  I.amOnPage('login')
})

When('user enters credentials and click the button "Login"' , () => {
  AuthPage.FillName('Tomaaa')
  AuthPage.FillPassword('Pipipupuu')
  AuthPage.clickButton()
})

When('click the link "Labels"' , () => {
  LabelPage.clickLinkLabel()
})

Then('click the button for label deletion', () => {
  LabelPage.clickToDelete()
})

When('click the button "Do it!"', () => {
  LabelPage.DoIt()
})

Then('user deletes the label successfully', () => {
  I.see("Меток сейчас нет.")
})

//----------Test1--------------------

Given('user visit login page', () => {
  I.amOnPage('login')
})

When('user enters credentials', () => {
  AuthPage.FillName('Tomaaa')
  AuthPage.FillPassword('Pipipupuu')
})

When('click the button {string}', () => {
  AuthPage.clickButton()
})

Then('user logs in successfully', () => {
  I.see('Входящие')
})


