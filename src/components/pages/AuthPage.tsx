import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { User, Building2, Eye, EyeOff, ArrowRight } from "lucide-react";
import { ReferralChain3D } from "../ReferralChain3D";

export function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "", role: "user" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const redirectTo = loginData.role === "admin" ? "Admin Dashboard" : "User Dashboard";
    toast.success(`Welcome back! Redirecting to ${redirectTo}...`);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    toast.success("Account created successfully! Please check your email to verify.");
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated 3D Background */}
      <div className="absolute inset-0 particle-bg">
        {/* 3D Scene Background */}
        <div className="absolute inset-0 opacity-20">
          <ReferralChain3D variant="chain" />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating particles/lines */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Auth Modal */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-5rem)] py-12 px-4">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center glow-cyan">
                  <span className="text-2xl">CW</span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-50" />
              </div>
            </div>
            <h1 className="text-3xl mb-2">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Campaign Waala
              </span>
            </h1>
            <p className="text-muted-foreground">
              Your gateway to decentralized finance
            </p>
          </div>

          {/* Auth Card */}
          <div className="glass rounded-3xl border-glow-animated overflow-hidden">
            <Tabs defaultValue="login" className="w-full">
              {/* Tab Headers */}
              <TabsList className="grid w-full grid-cols-2 p-1 glass m-1 rounded-2xl">
                <TabsTrigger
                  value="login"
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login" className="p-8 pt-6">
                <form onSubmit={handleLogin} className="space-y-6">
                  {/* Role Selection */}
                  <div>
                    <Label className="text-sm mb-3 block">Login As</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setLoginData({ ...loginData, role: "user" })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          loginData.role === "user"
                            ? "border-cyan-500 bg-cyan-500/10"
                            : "border-purple-500/20 hover:border-purple-500/40"
                        }`}
                      >
                        <User className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                        <div className="text-sm">User</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setLoginData({ ...loginData, role: "admin" })}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          loginData.role === "admin"
                            ? "border-purple-500 bg-purple-500/10"
                            : "border-purple-500/20 hover:border-purple-500/40"
                        }`}
                      >
                        <Building2 className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                        <div className="text-sm">Admin</div>
                      </button>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="login-email" className="text-sm mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="you@example.com"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                      className="glass border-purple-500/30 focus:border-cyan-500 bg-background/50"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <Label htmlFor="login-password" className="text-sm mb-2 block">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                        className="glass border-purple-500/30 focus:border-cyan-500 bg-background/50 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 glow-cyan group"
                  >
                    Sign In
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </TabsContent>

              {/* Signup Form */}
              <TabsContent value="signup" className="p-8 pt-6">
                <form onSubmit={handleSignup} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="signup-name" className="text-sm mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      value={signupData.name}
                      onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                      required
                      className="glass border-purple-500/30 focus:border-cyan-500 bg-background/50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="signup-email" className="text-sm mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="you@example.com"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                      className="glass border-purple-500/30 focus:border-cyan-500 bg-background/50"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <Label htmlFor="signup-password" className="text-sm mb-2 block">
                      Password
                    </Label>
                    <Input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                      className="glass border-purple-500/30 focus:border-cyan-500 bg-background/50"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <Label htmlFor="signup-confirm" className="text-sm mb-2 block">
                      Confirm Password
                    </Label>
                    <Input
                      id="signup-confirm"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={signupData.confirmPassword}
                      onChange={(e) =>
                        setSignupData({ ...signupData, confirmPassword: e.target.value })
                      }
                      required
                      className="glass border-purple-500/30 focus:border-cyan-500 bg-background/50"
                    />
                  </div>

                  {/* Terms */}
                  <div className="text-sm text-muted-foreground">
                    By signing up, you agree to our{" "}
                    <button type="button" className="text-cyan-400 hover:text-cyan-300">
                      Terms of Service
                    </button>{" "}
                    and{" "}
                    <button type="button" className="text-cyan-400 hover:text-cyan-300">
                      Privacy Policy
                    </button>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 glow-cyan group"
                  >
                    Create Account
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>

          {/* Social Login */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">Or continue with</p>
            <div className="flex gap-4 justify-center">
              {["Google", "GitHub", "Microsoft"].map((provider) => (
                <button
                  key={provider}
                  className="glass rounded-xl px-6 py-3 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all text-sm"
                >
                  {provider}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
