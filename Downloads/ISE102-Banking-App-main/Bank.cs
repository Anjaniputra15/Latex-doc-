namespace BankingApp;

public class Bank
{
    private List<User> users = new List<User>();

    public Bank()
    {
        // Add a default user for testing
        users.Add(new User
        {
            Username = "Joe.Doe",
            Password = "Password123",
            Email = "joe.doe@example.com",
            Age = 30,
            Phone = "123-456-7890",
            Balance = 0
        });
    }

    public bool SignUp(string username, string email, int age, string phone, string password)
    {
        if (users.Any(u => u.Username == username))
        {
            return false; // User already exists
        }
        
        users.Add(new User
        {
            Username = username,
            Email = email,
            Age = age,
            Phone = phone,
            Password = password,
            Balance = 0
        });
        return true; // Signup successful
    }

    public bool Login(string username, string password)
    {
        return users.Any(u => u.Username == username && u.Password == password);
    }

    public bool Deposit(string username, decimal amount)
    {
        // Validate amount is positive and numerical
        if (amount <= 0)
        {
            return false;
        }

        // Find user and update balance
        var user = users.FirstOrDefault(u => u.Username == username);
        if (user != null)
        {
            user.Balance += amount;
            return true;
        }
        return false;
    }

    public (bool success, string message) Withdraw(string username, decimal amount)
    {
        // Validate amount is positive
        if (amount <= 0)
        {
            return (false, "Invalid amount. Please enter a positive value.");
        }

        // Find user
        var user = users.FirstOrDefault(u => u.Username == username);
        if (user == null)
        {
            return (false, "User not found.");
        }

        // Check sufficient funds
        if (user.Balance < amount)
        {
            return (false, "not sufficient fund available");
        }

        // Process withdrawal
        user.Balance -= amount;
        return (true, "Withdrawal successful");
    }

    public decimal ViewBalance(string username)
    {
        var user = users.FirstOrDefault(u => u.Username == username);
        return user?.Balance ?? 0;
    }
} 