export async function DeleteLabel ({page}) {

  const visit = async () => {
    await page.goto('https://try.vikunja.io');
  };

  const fillName = async (name) => {
    await page.fill('[placeholder="e.g. frederick"]', name);
  };

  const fillPassword = async (password) => {
    await page.fill('[placeholder="e.g. •••••••••••"]', password);
  };

  const clickLogin = async () => {
    await page.click('button:has-text("Login")');
  };
   
  const click_labels = async() => {
    await page.click('a:has-text("Labels")');
  };
  
  const click_new_label = async() => {
    await page.click('a:has-text("New Label")');
  };
  
  const fill_title = async() => {
    await page.getByPlaceholder('The label title goes here…').fill('Label');
  };

  const create_label = async() => {
    await page.click('button:has-text("Create")');
  };

  const login = async() => {
    await visit();
    await fillName('Toma');
    await fillPassword('Pipipupu');
    await clickLogin();
  };
  
  const manage = async() =>{
    await click_labels();
    await click_new_label();
    await fill_title();
    await create_label();
  }

  const click_delete = async() => {
    await page.getByRole('main').getByRole('button').nth(1).click();
  };

  const do_it = async() => {
    await page.getByRole('button', { name: 'Do it!' }).click(); 
  };

  const delete_lab = async() =>{
    await click_delete();
    await do_it();
  }

return {

    visit,
    fillName,
    fillPassword,
    clickLogin,
    click_labels,
    click_new_label,
    fill_title,
    create_label,
    login,
    manage,
    delete_lab,
  };
}
