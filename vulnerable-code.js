// ============================================================
// SECURITY VULNERABILITIES
// ============================================================

// 1. SQL Injection
function getUserById(userId) {
    // ❌ This is vulnerable to SQL injection
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    return executeQuery(query);
}

// 2. Hardcoded Credentials
const API_KEY = "sk_live_1234567890abcdef";
const PASSWORD = "admin123!@#";

// 3. XSS Vulnerability
function renderUserInput(userInput) {
    // ❌ This is vulnerable to XSS
    document.getElementById('content').innerHTML = userInput;
}

// 4. Path Traversal
function readUserFile(filename) {
    // ❌ This is vulnerable to path traversal
    const content = fs.readFileSync(`/var/www/uploads/${filename}`);
    return content;
}

// 5. Weak Encryption
function hashPassword(password) {
    // ❌ This uses weak MD5 hashing
    return crypto.createHash('md5').update(password).digest('hex');
}

// ============================================================
// CODE QUALITY ISSUES
// ============================================================

// 6. Missing Null Check
function getUserName(user) {
    // ❌ This will crash if user is null
    return user.name.firstName;
}

// 7. Unhandled Async
async function fetchUserData(userId) {
    // ❌ This doesn't handle errors
    const data = await fetch(`/api/users/${userId}`);
    return data.json();
}

// 8. Console Statement
function calculateTotal(items) {
    console.log('Calculating total for:', items);
    return items.reduce((sum, item) => sum + item.price, 0);
}

// 9. Infinite Loop
function processQueue(queue) {
    // ❌ This could cause an infinite loop
    while (true) {
        const item = queue.pop();
        if (!item) break; // Sometimes this condition might be unreachable
        process(item);
    }
}

// 10. Too Many Parameters
function createUser(name, email, age, address, phone, role, department, manager) {
    // ❌ This has too many parameters (8)
    return { name, email, age, address, phone, role, department, manager };
}

// 11. Nested Callbacks
function processData(input) {
    // ❌ This is callback hell
    step1(input, function(err, result1) {
        if (err) return handleError(err);
        step2(result1, function(err, result2) {
            if (err) return handleError(err);
            step3(result2, function(err, result3) {
                if (err) return handleError(err);
                step4(result3, function(err, result4) {
                    if (err) return handleError(err);
                    return finalize(result4);
                });
            });
        });
    });
}

// 12. Complex Condition
function isEligibleForDiscount(user, order, product, promo) {
    // ❌ This is too complex
    if (user.isPremium && order.total > 100 || 
        product.category === 'electronics' && promo.isActive && 
        user.age > 18 && user.age < 65 && 
        order.items.length > 3 && 
        !user.isBlocked && 
        (promo.code === 'SAVE20' || promo.code === 'SAVE50')) {
        return true;
    }
    return false;
}

// ============================================================
// PERFORMANCE & MAINTAINABILITY
// ============================================================

// 13. Missing Rate Limit
async function processBatch(items) {
    // ❌ This processes all items at once without rate limiting
    for (const item of items) {
        await callApi(item);
    }
}

// 14. Deprecated API
function readConfigFile() {
    // ❌ This uses deprecated synchronous file operations
    const config = fs.readFileSync('./config.json');
    return JSON.parse(config);
}

// 15. Memory Leak Risk
function startPolling() {
    // ❌ This never clears the interval
    setInterval(() => {
        checkStatus();
    }, 5000);
}

// 16. Hardcoded URL
function fetchProducts() {
    // ❌ This has a hardcoded URL
    return fetch('https://api.example.com/products');
}
