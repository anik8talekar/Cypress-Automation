class ScheduleManagementLocators{
ADMIN = "//span[contains(text(),' Admin ')]"
SCHEDULE_MANAGEMENT = "//span[contains(text(),' Schedule Management ')]"
SCHEDULE_DATA_EXPORT_ICON = "//tr[@aria-rowindex='1']//a[@title='Schedule Data Export']"
MIGRATE_SCHEDULE_DATA = ".ap-tabset-toggle-wrapper > :nth-child(3)"
MIGRATE_SCHEDULE_DATA_ICON = "//button//div[contains(text(),' Migrate ')]"
YES = "//button//div[contains(text(),' Yes ')]"
NOTIFICATION = '.trux-notification__content'
MIGRATION_STATUS = "//td[@aria-colindex='12']//input[@type='text']"
JURISDICTION = "//tr[@aria-rowindex='1']//td[@aria-colindex='4']"
CHECKBOX = "//span[@class='dx-checkbox-icon']"
CHECK_IMPORT_STATUS = "//div[@role='tablist']//span[contains(text(),'Check Import Status')]"
FILE_NAME_CELL_1 = "//tr[@aria-rowindex='1']//td[@aria-colindex='3']"
FILE_NAME_CELL_2 = "//tr[@aria-rowindex='2']//td[@aria-colindex='3']"
}
export default ScheduleManagementLocators;