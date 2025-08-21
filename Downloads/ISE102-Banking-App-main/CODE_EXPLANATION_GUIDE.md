# Step-by-Step Code Explanation Guide for ISE102 Banking Application

## Overview
This guide will help you understand and explain each part of the banking application for your Assessment 3 presentation.

---

## 1. User Class (User.cs)
**Purpose:** Defines the data structure for bank users

### Step-by-Step Explanation:
```csharp
public class User
{
    public string Username { get; set; } = string.Empty;  // Stores user's login name
    public string Email { get; set; } = string.Empty;     // Stores user's email
    public int Age { get; set; }                          // Stores user's age
    public string Phone { get; set; } = string.Empty;     // Stores phone number
    public string Password { get; set; } = string.Empty;  // Stores password
    public decimal Balance { get; set; } = 0;             // NEW: Stores account balance
}
```

**What to explain:**
- This is a data model class (like a blueprint for user data)
- Each property represents information about a user
- Balance property was added in Assessment 3 to track money
- `decimal` type is used for Balance because it's precise for money calculations

---

## 2. Bank Class (Bank.cs)
**Purpose:** Manages all banking operations and user data

### Step-by-Step Explanation:

#### 2.1 Class Structure and Constructor
```csharp
public class Bank
{
    private List<User> users = new List<User>();  // Private list stores all users
    
    public Bank()
    {
        // Constructor adds test user Joe.Doe when Bank is created
        users.Add(new User
        {
            Username = "Joe.Doe",
            Password = "Password123",
            // ... other properties
            Balance = 0  // Starts with zero balance
        });
    }
}
```

**What to explain:**
- Bank class contains a private list of users (encapsulation principle)
- Constructor automatically creates Joe.Doe test account
- Private list means only Bank class methods can access users directly

#### 2.2 Login Method
```csharp
public bool Login(string username, string password)
{
    // Searches users list to find matching username AND password
    return users.Any(u => u.Username == username && u.Password == password);
}
```

**What to explain:**
- Returns true if user exists with matching credentials
- Returns false if no match found
- Uses LINQ `Any()` method to search efficiently

#### 2.3 SignUp Method
```csharp
public bool SignUp(string username, string email, int age, string phone, string password)
{
    // First checks if username already exists
    if (users.Any(u => u.Username == username))
    {
        return false;  // Username taken
    }
    
    // Creates new user and adds to list
    users.Add(new User
    {
        Username = username,
        Email = email,
        Age = age,
        Phone = phone,
        Password = password,
        Balance = 0  // New accounts start with 0 balance
    });
    return true;  // Signup successful
}
```

**What to explain:**
- Prevents duplicate usernames
- Creates new User object with provided information
- New users always start with zero balance

#### 2.4 Deposit Method (NEW - Assessment 3)
```csharp
public bool Deposit(string username, decimal amount)
{
    // Step 1: Validate amount is positive
    if (amount <= 0)
    {
        return false;  // Invalid amount
    }
    
    // Step 2: Find the user
    var user = users.FirstOrDefault(u => u.Username == username);
    
    // Step 3: If user exists, add money to balance
    if (user != null)
    {
        user.Balance += amount;  // Add to existing balance
        return true;  // Deposit successful
    }
    return false;  // User not found
}
```

**What to explain:**
- Validates that deposit amount is positive (no negative deposits)
- Finds user by username
- Adds amount to existing balance
- Returns true/false to indicate success

#### 2.5 Withdraw Method (NEW - Assessment 3)
```csharp
public (bool success, string message) Withdraw(string username, decimal amount)
{
    // Step 1: Validate amount is positive
    if (amount <= 0)
    {
        return (false, "Invalid amount. Please enter a positive value.");
    }
    
    // Step 2: Find the user
    var user = users.FirstOrDefault(u => u.Username == username);
    if (user == null)
    {
        return (false, "User not found.");
    }
    
    // Step 3: Check if user has enough money
    if (user.Balance < amount)
    {
        return (false, "not sufficient fund available");  // EXACT message from requirements
    }
    
    // Step 4: Deduct money from balance
    user.Balance -= amount;
    return (true, "Withdrawal successful");
}
```

**What to explain:**
- Returns a tuple (two values: success status and message)
- Three validation checks: positive amount, user exists, sufficient funds
- "not sufficient fund available" message matches exact requirement
- Only deducts money if all checks pass

#### 2.6 ViewBalance Method (NEW - Assessment 3)
```csharp
public decimal ViewBalance(string username)
{
    // Find user and return their balance
    var user = users.FirstOrDefault(u => u.Username == username);
    return user?.Balance ?? 0;  // Returns 0 if user not found
}
```

**What to explain:**
- Simple method to get user's current balance
- Uses null-conditional operator (?.) for safety
- Returns 0 if user doesn't exist

---

## 3. Program Class (Program.cs)
**Purpose:** Main application logic and user interface

### Step-by-Step Explanation:

#### 3.1 Main Method - Entry Point
```csharp
static void Main(string[] args)
{
    Bank bank = new Bank();  // Create bank instance
    while (true)  // Keep running until user quits
    {
        // Display main menu
        Console.WriteLine("Welcome to abc Bank");
        Console.WriteLine("1: Login");
        Console.WriteLine("2: Signup");
        Console.WriteLine("3: Show Demo Credentials");
        Console.WriteLine("4: Quit");
        
        string choice = GetUserInput("Select Option: ");
        
        switch (choice)
        {
            case "1": HandleLogin(bank); break;
            case "2": HandleSignup(bank); break;
            case "3": ShowDemoCredentials(); break;
            case "4": return;  // Exit program
        }
    }
}
```

**What to explain:**
- Creates one Bank instance that manages all operations
- Infinite loop shows menu until user quits
- Switch statement directs to appropriate function

#### 3.2 HandleLogin Method
```csharp
static void HandleLogin(Bank bank)
{
    int attempts = 0;
    while (attempts < 3)  // Maximum 3 login attempts
    {
        string username = GetUserInput("Enter username: ");
        string password = GetUserInput("Enter your password: ");
        
        if (bank.Login(username, password))  // Check credentials
        {
            Console.WriteLine($"Welcome {username}");
            ShowBankMenu(bank, username);  // Go to banking menu
            return;
        }
        else
        {
            attempts++;
            // Show retry options if not at 3 attempts yet
        }
    }
}
```

**What to explain:**
- Implements 3-attempt security limit
- Passes username to ShowBankMenu for banking operations
- Provides retry/quit options after failed attempts

#### 3.3 ShowBankMenu Method (UPDATED - Assessment 3)
```csharp
static void ShowBankMenu(Bank bank, string username)
{
    while (true)
    {
        // Display banking options
        Console.WriteLine("1: View Balance");
        Console.WriteLine("2: Deposit");
        Console.WriteLine("3: Withdraw");
        Console.WriteLine("4: Transfer");
        Console.WriteLine("5: Quit");
        
        switch (choice)
        {
            case "1": ViewBalance(bank, username); break;
            case "2": PerformDeposit(bank, username); break;
            case "3": PerformWithdraw(bank, username); break;
            case "4": // Transfer - future feature
            case "5": return;  // Back to main menu
        }
    }
}
```

**What to explain:**
- Now receives username parameter to know who's logged in
- Calls actual banking methods instead of placeholder messages
- Transfer remains as future enhancement

#### 3.4 PerformDeposit Method (NEW - Assessment 3)
```csharp
static void PerformDeposit(Bank bank, string username)
{
    // Step 1: Get amount from user
    string amountInput = GetUserInput("Enter amount to deposit: ");
    
    // Step 2: Try to convert string to decimal
    if (decimal.TryParse(amountInput, out decimal amount))
    {
        // Step 3: Call bank's Deposit method
        if (bank.Deposit(username, amount))
        {
            Console.WriteLine($"Successfully deposited ${amount:F2}");
            
            // Step 4: Show new balance
            decimal newBalance = bank.ViewBalance(username);
            Console.WriteLine($"Your new balance is: ${newBalance:F2}");
        }
        else
        {
            Console.WriteLine("Deposit failed. Please enter a positive amount.");
        }
    }
    else
    {
        // Handle non-numerical input
        Console.WriteLine("Invalid input. Please enter a valid numerical value.");
    }
}
```

**What to explain:**
- Handles user input validation (checks if it's a number)
- Calls Bank.Deposit to process transaction
- Shows updated balance after successful deposit
- F2 format shows 2 decimal places for currency

#### 3.5 PerformWithdraw Method (NEW - Assessment 3)
```csharp
static void PerformWithdraw(Bank bank, string username)
{
    string amountInput = GetUserInput("Enter amount to withdraw: ");
    
    if (decimal.TryParse(amountInput, out decimal amount))
    {
        // Withdraw returns tuple with success and message
        var (success, message) = bank.Withdraw(username, amount);
        
        if (success)
        {
            Console.WriteLine($"Successfully withdrew ${amount:F2}");
            decimal newBalance = bank.ViewBalance(username);
            Console.WriteLine($"Your new balance is: ${newBalance:F2}");
        }
        else
        {
            // Shows specific error message (including "not sufficient fund available")
            Console.WriteLine($"Withdrawal failed: {message}");
        }
    }
    else
    {
        Console.WriteLine("Invalid input. Please enter a valid numerical value.");
    }
}
```

**What to explain:**
- Similar to deposit but calls Withdraw method
- Handles tuple return value (success, message)
- Displays appropriate error message from Bank class

---

## 4. Key Concepts to Emphasize

### Object-Oriented Programming (OOP) Principles:
1. **Encapsulation**: Private users list in Bank class
2. **Classes**: User (data), Bank (logic), Program (interface)
3. **Methods**: Each method has single responsibility

### Input Validation:
1. **Numerical validation**: TryParse for amounts
2. **Business rules**: Positive amounts, sufficient funds
3. **User feedback**: Clear error messages

### Data Flow:
1. User → Program (interface)
2. Program → Bank (business logic)
3. Bank → User list (data storage)
4. Response flows back same path

---

## 5. Test Cases Explanation

### Test Case 1: Valid Deposit
- Input: 100.50
- Expected: Balance increases by 100.50
- Tests: Positive decimal handling

### Test Case 2: Invalid Text Input
- Input: "abc" for amount
- Expected: "Invalid input. Please enter a valid numerical value."
- Tests: Non-numerical input handling

### Test Case 3: Negative/Zero Amount
- Input: -50 or 0
- Expected: "Deposit failed. Please enter a positive amount."
- Tests: Business rule validation

### Test Case 4: Valid Withdrawal
- Input: 50 (when balance is 100.50)
- Expected: Balance becomes 50.50
- Tests: Successful withdrawal

### Test Case 5: Insufficient Funds
- Input: 60 (when balance is 50.50)
- Expected: "not sufficient fund available"
- Tests: Overdraft prevention

---

## 6. Presentation Tips

### When explaining code:
1. Start with the big picture (3-tier architecture)
2. Explain data flow: User → Program → Bank → Data
3. Highlight Assessment 3 additions (Balance, Deposit, Withdraw)
4. Show how methods work together
5. Emphasize error handling and validation

### Key points to mention:
- Why decimal for money (precision)
- Why tuple for Withdraw (need both status and message)
- How validation prevents errors
- Security features (3-attempt limit, private user list)

### Demo sequence:
1. Show login with Joe.Doe
2. View initial balance (0)
3. Deposit 100.50
4. View updated balance
5. Withdraw 50
6. Try to withdraw 60 (show insufficient funds)
7. Try invalid input "abc"

This will demonstrate all requirements and test cases effectively!