let questions = [
    {
        question: 'In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?',
        options: [
            'Data Pill',
            'Data Trigger',
            'Data Element',
            'Field Value'
        ],
        answer: 1
    },
    {
        question: 'What access does a user need to be able to import articles to a knowledge base? ',
        options: [
            'sn_knowledge_import',
            'sn_knowledge_contribute',
            'Can contribute',
            'Sn_knowledge_write'
        ],
        answer: 3
    },
    {
        question: 'What is an advantage of defining relationship types between CI Classes?',
        options: [
            'Improves data quality, as the CIs will automatically be related when the CMDB is activated.',
            'It prevents user from relating CIs incorrectly',
            'It automates the loading of CI Dependency View. ',
            'Makes relating CIs easier, because predefined relationship suggest which types of CIs should be'
        ],
        answer: 3
    },
    {
        question: 'Certain tables have a prefix like hr_ - Which kind of table has a name that starts with a custom prefix?',
        options: [
            'Excluded table',
            'Scoped application table.',
            'System table.',
            'Explanation table.'
        ],
        answer: 2
    },
    {
        question: 'Which role can manage multiple knowledge bases?',
        options: [
            'Sn_kb_admin',
            'Kb_admin',
            'Knowledge_admin',
            'Knowledge_base_admin'
        ],
        answer: 3
    },
    {
        question: 'Which ServiceNow resource can be used as a blueprint to map your IT services to ServiceNow?',
        options: [
            'Configuration Management Database (CMDB)',
            'Now Learning',
            'Service Mapping Guided Setup',
            'Common Services Data Model (CSDM)'
        ],
        answer: 4
    },
    {
        question: 'What section on the CI form, can you find Information about the other CIs associated with your CI? ',
        options: [
            'Related Lists',
            'Related Items',
            'Related Links',
            'Child CI Tab'
        ],
        answer: 2
    },
    {
        question: 'Which field (or fields) is used as a unique key during imports?',
        options: [
            'Sys IDs',
            'Match fields',
            'Key Fields',
            'Coalesce Fields'
        ],
        answer: 4
    },
    {
        question: 'Which script runs when a record is displayed, inserted, updated, deleted or when a table is queried?',
        options: [
            'Client Script',
            'Business Rule',
            'UI Policy',
            'Data Policy'
        ],
        answer: 2
    },
    {
        question: 'What is the system behaviour when applying a data policy to the list view to make a field read-only?',
        options: [
            'The field will still be editable and can be successfully updated.',
            'The field will be hidden from the list view and cannot be added back to the personalised list.',
            'The field will appear to be editable, but the update will fail.',
            'The field will appear read-only and cannot be updated.'
        ],
        answer: 3
    },
    {
        question: 'What ServiceNow component would you use to see which Applications and Modules contain the word ‘Task’?',
        options: [
            'Favorites',
            'Help Sidebar',
            'Global search',
            'Filter Navigator'
        ],
        answer: 4
    },
    {
        question: 'Which ServiceNow feature can be used to begin the creation of an application?',
        options: [
            'IntegrationHub',
            'System Dictionary',
            'Configuration Management Database (CMDB)',
            'Guided Application Creator'
        ],
        answer: 4
    },
    {
        question: 'What is a stakeholders role in implementing and maintaining the CMDB?',
        options: [
            'Identify necessary reports showing CI health for related departments.',
            'Create a go-forward strategy for configuration management responsibilities.',
            'Determine specific CI information required to support capabilities and build organisational buy-in.',
            'Import CI data, such as name, source and relationships.'
        ],
        answer: 3
    },
    {
        question: 'What CMDB table stores the basic attributes of all the configuration items?',
        options: [
            'Configuration Item [cmdb_ci]',
            'Configuration File [cmdb_ci_config_file]',
            'CI Relationship [cmdb_rel_ci]',
            'Base Configuration Item [cmdb]'
        ],
        answer: 1
    },
    {
        question: 'What of the following roles cannot be delegated?',
        options: [
            'user_admin',
            'role_delegator',
            'itil',
            'cmdb_admin'
        ],
        answer: 2
    },
    {
        question: 'What Visual Task Board type automatically updates the tasks when the respective cards are edited or change lanes?',
        options: [
            'Guided',
            'Freform',
            'List',
            'Flexible'
        ],
        answer: 1
    },
    {
        question: 'What do you configure to instruct fields how to behave on a form when a UI policy is triggered?',
        options: [
            'UI Actions',
            'UI Policy Action',
            'UI Action',
            'Data policy'
        ],
        answer: 2
    },
    {
        question: 'Which script runs when a record is displayed, inserted, updated, deleted or when a table is queried?',
        options: [
            'Client Script',
            'UI Action',
            'Workflow',
            'Business Rule'
        ],
        answer: 4
    },
    {
        question: 'What functionality can you use to track the amount of time a task has been open to ensure that tasks are completed within an allotted time?',
        options: [
            'Service Level Aggreement',
            'Approvals',
            'Access Control Level',
            'Application Access'
        ],
        answer: 1
    },
    {
        question: 'Under which Report Designer tab can you define the report grouping?',
        options: [
            'Style',
            'Data',
            'Type',
            'Configure'
        ],
        answer: 1
    },
    {
        question: '(Rome) Who has access to create, edit or delete sorting criteria in Visual Task Boards?',
        options: [
            'The owner of the board',
            'Users with vtb_admin role',
            'Primary and additional assignees of the board cards',
            'All board members'
        ],
        answer: 1
    },
    {
        question: '',
        options: [
            'Knowledge Base Managers',
            'All users',
            'User Criteria Admins',
            'No one'
        ],
        answer: 1
    },
    {
        question: 'A record is added to which table each time a knowledge article is viewed?',
        options: [
            'Knowledge [kb_knowledge]',
            'Knowledge Use [kb_use]',
            'Knowledge Feedback [kb_feedback]',
            'Knowledge Search Log [ts_query_kb]'
        ],
        answer: 2
    },
    {
        question: 'What role can manage all aspects of the Service Catalog application and the scripting functions?',
        options: [
            'Catalogue managers (catalog_manager)',
            'Catalogue editors (catalog_editor)',
            'Administrators (admin)',
            'Catalogue administrators (catalog_admin)'
        ],
        answer: 3
    },
    {
        question: 'Which of the following does each flow consist of, as a minimum, in Flow Designer? Select 2 Answers from the below options',
        options: [
            'Trigger and Subflow',
            'Flow logic and Trigger',
            'Action and Flow logic',
            'Action and Trigger'
        ],
        answer: 4
    },
    {
        question: 'Which of the following definitions corresponds to Service Catalogue?',
        options: [
            'A collection of one or more ordered items',
            'It contains a collection of orderable products and services',
            'A customised interface used to build and submit an order',
            'Products placed in the shopping cart'
        ],
        answer: 2
    },
    {
        question: 'What happens if you select Publish when creating articles manually or by import?',
        options: [
            'The articles are sent for review.',
            'The articles are automatically moved to a Published state.',
            'It triggers the publish workflow assigned to the knowledge base.',
            'The articles are sent for approvals.'
        ],
        answer: 3
    },
    {
        question: '(Rome) What related list can you use to extend and track the different types of groups assigned to a Configuration Item?',
        options: [
            'CMDB Alert Groups',
            'Resource Group',
            'Dynamic CI Group',
            'Teams'
        ],
        answer: 4
    },
    {
        question: 'Which of the following are Data management plugin?',
        options: [
            'Table Cleaner',
            'Data Dictionary Table',
            'Many to Many Rotations',
            'Schema Map'
        ],
        answer: 3
    },
    {
        question: 'Which tool is used to determine relationships between fields in an import set and an existing table?',
        options: [
            'Import Set',
            'Transform map',
            'Target Table',
            'Coalesce'
        ],
        answer: 2
    },
    {
        question: 'What variable type should be used to allow uploading an attachment from a question in a catalogue item?',
        options: [
            'URL',
            'HTML',
            'Attachment',
            'Reference'
        ],
        answer: 3
    },
    {
        question: 'Which of the following field types do have a one-to-many relationship?',
        options: [
            'Name-Value Paris',
            'Choice Field',
            'Category Field',
            'Glide List'
        ],
        answer: 4
    },
    {
        question: 'What are the types of Client script used in ServiceNow?',
        options: [
            'onCellEdit & onLoad',
            '1 and 2',
            'onSubmit & onChange',
            'None of the Above'
        ],
        answer: 2
    },
    {
        question: 'How to get security_admin role/ elevated privilege for a user session?',
        options: [
            'Select the security_admin option in the Elevate Roles section',
            'Add security role to the user from Roles related list in user record',
            'Select the Elevate Role option in the security admin',
            'Select the Elevate Role option in the system settings'
        ],
        answer: 1
    },
    {
        question: 'Incident extends which table?',
        options: [
            'RITM',
            'Task',
            'Problem',
            'Change Request'
        ],
        answer: 2
    },
    {
        question: 'What provides a guide for moving data from import sets?',
        options: [
            'Data Source',
            'Coalesce Fields',
            'Transform Maps',
            'Business Rule'
        ],
        answer: 3
    },
    {
        question: 'What table is used to track all changes in an update Set?',
        options: [
            'sys_update_set',
            'sys_update_xml',
            'sys_update',
            'sys_admin_update'
        ],
        answer: 1
    },
    {
        question: 'What are events caused by?',
        options: [
            'Workflow Scripts and Business Rules',
            'User action and scripts',
            'Flow Designer and Data Policy',
            'Script and Business Rule'
        ],
        answer: 1
    },
    {
        question: 'Which one on the homepage has access to knowledge base?',
        options: [
            'Report',
            'News',
            'Catalog',
            'None of the Above'
        ],
        answer: 2
    },
    {
        question: 'Types of SLA (SLA, OLA & UC) are defined in which field?',
        options: [
            'Type Field',
            'Conditional Field',
            'Retroactive Start',
            'Duration'
        ],
        answer: 1
    },
    {
        question: 'What are the out of box progress stages for a Service Request?',
        options: [
            'Waiting for approval',
            'Fulfillment',
            'Delivery',
            'All of the above'
        ],
        answer: 4
    },
];
