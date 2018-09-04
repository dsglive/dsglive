# Todo
## ***Customer Report***
- [x] Inventory item search function ie: date range/shipper/ item number/ description
  - Add new API to fetch packages that is search
  - Save The Old packges to old packages
  - Save Fetch data to search_packages 
  - change the data table to show either old packages or search packages when toggle a button

## ***Client Report***
### Index and PDF
- [x] Client Inventory report add bin number/ must be sortable by bin #/ need PDF
  - Add bin number on the pdf
  - Add on The Controller For the Api to Add A Sort by bin #

## ***Damage Report***
### Index
- [x] If Damaged item is repaired is shouldnt show on the Damaged Report Already
### View
- [x] Damage item report needs completed status accessible from report currently have to go back to receiving to change repair status because repair status is locked from action page
  - make this link editable `http://dsglive.test/reports/package/2/view` 
  - add a status for repaired
### PDF
- [x] Damage item report does not need PO#/ Needs Bin #


## ***Invoicing***

### Controller Generate Invoice and Fetch Billables
- [x] Calculate Storage Fee Retroactive Even if it still not yet delivered, the current model is the Storage Fee is being calculated Only After it is delivered.
- [ ] Add Event Hooks When Mass Creating Invoice , which will update previous_invoice_date , last_invoice_at and the invoiced filled
### Invoices
- [  ] Add a Send Invoice To Customer Individual and Mass Mail , ***this is not a priority***
- [  ] Show Invoices For Specific Customer on Their Dashboard
- [-] ALL fields that display money must be in $XXX.XX format. $535.50   ***verify this, i think this is done already***


### Customer Management Report ***NEW***
- Search by Customer Name then Show All Invoices
  - [ ] Search Customer Dropdown
  - [ ] Filter by Date From To Date To Invoice
  - [ ] Controller for the Api Response
- [ ]  Add button to Show Customer  Invoice Report PDF
  - https://dsglive.com/invoices/customer-invoice-report
  - [example.pdf](./z-resources/customer-invoice-report.pdf) 
- [  ] web Controller For PDF
- [ ] PDF Report Blade
### Client Management Report ***NEW***
- Search by Customer Name then Search By Client
  - [ ] Search Customer Dropdown
  - [ ] Search Client Dropdown
  - [ ] Filter by Date From To Date To Invoice
  - [ ] Controller for the Api Response
- [ ]  Add button to Show Customer  Invoice Report PDF
  - https://dsglive.com/invoices/client-invoice-report
  - [example.pdf](./z-resources/client-invoice-report.pdf) 
- [  ] web Controller For PDF
- [ ] PDF Report Blade

## ***Payments***
- [x] Create new Tables payments
- [x] Create New Model Payment
- [x] Add Controller To Create, Update, Delete Payments
  - On Delete We Need To Automatically Change The Current Balance of the User
- [X] Add user Interface for Payments pages Index, Create, Edit
## ***Balance***
- [x] Add Balance field on users table which will be updated and the transaction will be recorded using laravel event projector. which Add new balance if there is a new Invoice, if The Invoice is Deleted We need to subract Balance , And when payment is made the balance should be deducted also.
- [x] Add Balance when Payment is Delete
- [x] Subtract Balance When Payment is Created
- [x] Add or Subtract Balance based on difference
- [] Subtract Balance When Invoice Deleted
- [] Add Balance When Invoice Created
- [ ] Show Balance Amount on Customer Dashboard 
## ***Logistics***
- [-] Add A Way To Create Delivery PDF Without Charges ***verify this, i think this is done already***


