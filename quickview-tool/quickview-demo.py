#!/usr/bin/env python3

import datetime
import random
import matplotlib.pyplot as plt

def main():
    print("🐍 QuickView Python Demo")
    print("=" * 30)
    
    # Current time
    now = datetime.datetime.now()
    print(f"Current time: {now.strftime('%Y-%m-%d %H:%M:%S')}")
    
    # Random data
    data = [random.randint(1, 100) for _ in range(10)]
    print(f"Random data: {data}")
    print(f"Sum: {sum(data)}")
    print(f"Average: {sum(data) / len(data):.2f}")
    
    # Simple calculation
    result = sum(i**2 for i in range(1, 11))
    print(f"Sum of squares 1-10: {result}")

if __name__ == "__main__":
    main()