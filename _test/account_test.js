// Feature('Authorization')

// Scenario('Succeed authorization', ({ I, AuthPage }) => {
//   AuthPage.visitLoginPage()
//   AuthPage.FillName('Tomaaa')
//   AuthPage.FillPassword('Pipipupuu')
//   AuthPage.clickButton()
//   I.see('//span[text()="Входящие"]')
// })

// Feature('Label creation')

// Scenario('Succeed label creation', ({ I, AuthPage, LabelPage }) => {
//   AuthPage.visitLoginPage()
//   AuthPage.FillName('Toma')
//   AuthPage.FillPassword('Pipipupu')
//   AuthPage.clickButton()
//   LabelPage.clickLinkLabel()
//   LabelPage.newLabel()
//   LabelPage.LabelTitle()
//   LabelPage.createLabel()
//   I.see('//button[contains(@class, "delete is-small")]')
// })

// Feature('Label deletion')

// Scenario('Succeed label deletion', ({ I, AuthPage, LabelPage }) => {
//   AuthPage.visitLoginPage()
//   AuthPage.FillName('Tomaaa')
//   AuthPage.FillPassword('Pipipupuu')
//   AuthPage.clickButton()
//   LabelPage.clickLinkLabel()
//   LabelPage.clickToDelete()
//   LabelPage.DoIt()
//   I.see('//p[contains(text(), "do not have")]')
// })

// Feature('Team creation')

// Scenario('Succeed team creation', ({ I, AuthPage, TeamPage }) => {
//   AuthPage.visitLoginPage()
//   AuthPage.FillName('Tomaaa')
//   AuthPage.FillPassword('Pipipupuu')
//   AuthPage.clickButton()
//   TeamPage.clickLinkTeam()
//   TeamPage.newTeam()
//   TeamPage.TeamTitle()
//   TeamPage.createTeam()
//   I.see('//p[text()="Изменить команду "Team""]')
// })

// Feature('Adding a user to a team')

// Scenario('Succeed user adding', ({ I, AuthPage, TeamPage }) => {
//   AuthPage.visitLoginPage()
//   AuthPage.FillName('Tomaaa')
//   AuthPage.FillPassword('Pipipupuu')
//   AuthPage.clickButton()
//   TeamPage.clickLinkTeam()
//   TeamPage.clickTeam()
//   TeamPage.AddUser()
//   TeamPage.AddToTeam()
//   I.see('//span[@class="username"][text()="frog"]')
// })
