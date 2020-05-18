AIUtil.SetContext Browser("Advantage Shopping")

AIUtil("profile").Click
AIUtil("input", "Username").Type "demouser"
AIUtil("input", "Password").Type "Password1"
AIUtil("button", "LOGIN").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Click

