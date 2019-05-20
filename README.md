#Redux


- Actions----->Reducers---->Store
|                               |
|                               |
|------------ View <------------|



- types.js    
        
         (For Reducer)   EMAIL_CHANGED = 'email_changed'  (For Action) 


#REDUX THUNK

* DEFAULT ACTION CREATURE RULES :

1. Action creature are functions
2. Must Return an Action
3. An action is an object with a 'type' property