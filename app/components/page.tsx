"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Kbd } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-heading italic tracking-tight border-b border-border/50 pb-2">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function DemoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-6 space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function ComponentsPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [progress, setProgress] = React.useState(45);
  const [sliderValue, setSliderValue] = React.useState([50]);
  const [isCollapsibleOpen, setIsCollapsibleOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-heading">
            Glassmorphism UI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A minimalist black and white component library with frosted glass aesthetics
          </p>
        </header>

        <Section title="Buttons">
          <DemoCard title="Button Variants">
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </DemoCard>
          <DemoCard title="Button Sizes">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">◆</Button>
            </div>
          </DemoCard>
          <DemoCard title="Button Group">
            <ButtonGroup>
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
          </DemoCard>
        </Section>

        <Section title="Inputs & Forms">
          <div className="grid md:grid-cols-2 gap-6">
            <DemoCard title="Input">
              <div className="space-y-4">
                <Input placeholder="Enter your email..." />
                <Input type="password" placeholder="Password" />
                <Input disabled placeholder="Disabled input" />
              </div>
            </DemoCard>
            <DemoCard title="Textarea">
              <Textarea placeholder="Write your message here..." rows={4} />
            </DemoCard>
            <DemoCard title="Select">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </DemoCard>
            <DemoCard title="Checkbox & Switch">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms</Label>
                </div>
                <div className="flex items-center gap-3">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
              </div>
            </DemoCard>
            <DemoCard title="Radio Group">
              <RadioGroup defaultValue="option1">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option1" id="r1" />
                  <Label htmlFor="r1">Option 1</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option2" id="r2" />
                  <Label htmlFor="r2">Option 2</Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="option3" id="r3" />
                  <Label htmlFor="r3">Option 3</Label>
                </div>
              </RadioGroup>
            </DemoCard>
            <DemoCard title="Slider">
              <div className="space-y-4">
                <Slider
                  value={sliderValue}
                  onValueChange={(value) => setSliderValue(Array.isArray(value) ? value : [value])}
                  max={100}
                  step={1}
                />
                <p className="text-sm text-muted-foreground">Value: {sliderValue[0]}</p>
              </div>
            </DemoCard>
            <DemoCard title="Input OTP">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </DemoCard>
            <DemoCard title="Label & Field">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
            </DemoCard>
          </div>
        </Section>

        <Section title="Cards & Containers">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-strong">
              <CardHeader>
                <CardTitle>Glass Card</CardTitle>
                <CardDescription>A frosted glass card component</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This card uses the glassmorphism effect with backdrop blur and
                  translucent backgrounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            <Card className="glass">
              <CardHeader>
                <CardTitle>Subtle Glass</CardTitle>
                <CardDescription>A lighter glass effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Perfect for secondary content that needs to blend with the background.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section title="Feedback & Status">
          <div className="grid md:grid-cols-2 gap-6">
            <DemoCard title="Alerts">
              <div className="space-y-4">
                <Alert>
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    This is a default alert message.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please try again.
                  </AlertDescription>
                </Alert>
              </div>
            </DemoCard>
            <DemoCard title="Badges">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </DemoCard>
            <DemoCard title="Progress">
              <div className="space-y-2">
                <Progress value={progress} />
                <p className="text-sm text-muted-foreground">{progress}% complete</p>
              </div>
            </DemoCard>
            <DemoCard title="Spinner & Skeleton">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Spinner />
                  <span className="text-sm text-muted-foreground">Loading...</span>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            </DemoCard>
          </div>
        </Section>

        <Section title="Navigation">
          <DemoCard title="Breadcrumb">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Current</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </DemoCard>
          <DemoCard title="Tabs">
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className="glass">
                <TabsTrigger value="tab1">Overview</TabsTrigger>
                <TabsTrigger value="tab2">Analytics</TabsTrigger>
                <TabsTrigger value="tab3">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Overview content goes here.
                </p>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Analytics content goes here.
                </p>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Settings content goes here.
                </p>
              </TabsContent>
            </Tabs>
          </DemoCard>
          <DemoCard title="Pagination">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </DemoCard>
          <DemoCard title="Navigation Menu">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-64">
                      <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-64">
                      <NavigationMenuLink href="#">All Components</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </DemoCard>
          <DemoCard title="Menubar">
            <Menubar className="glass">
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New</MenubarItem>
                  <MenubarItem>Open</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Save</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Zoom In</MenubarItem>
                  <MenubarItem>Zoom Out</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </DemoCard>
        </Section>

        <Section title="Data Display">
          <DemoCard title="Table">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Alice</TableCell>
                  <TableCell>
                    <Badge variant="outline">Active</Badge>
                  </TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bob</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending</Badge>
                  </TableCell>
                  <TableCell>User</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Charlie</TableCell>
                  <TableCell>
                    <Badge variant="outline">Active</Badge>
                  </TableCell>
                  <TableCell>Editor</TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </DemoCard>
          <div className="grid md:grid-cols-2 gap-6">
            <DemoCard title="Avatar">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10">
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>XY</AvatarFallback>
                </Avatar>
              </div>
            </DemoCard>
            <DemoCard title="Separator">
              <div className="space-y-4">
                <p className="text-sm">Content above</p>
                <Separator />
                <p className="text-sm">Content below</p>
              </div>
            </DemoCard>
            <DemoCard title="Aspect Ratio">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  16:9 Aspect Ratio
                </div>
              </AspectRatio>
            </DemoCard>
            <DemoCard title="Scroll Area">
              <ScrollArea className="h-32 rounded-lg border">
                <div className="p-4 space-y-2">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <p key={i} className="text-sm">
                      Scrollable content item {i + 1}
                    </p>
                  ))}
                </div>
              </ScrollArea>
            </DemoCard>
          </div>
          <DemoCard title="Calendar">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
              />
            </div>
          </DemoCard>
          <DemoCard title="Carousel">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, i) => (
                  <CarouselItem key={i}>
                    <div className="p-1">
                      <Card className="glass">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-3xl font-semibold">{i + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </DemoCard>
        </Section>

        <Section title="Overlays & Dialogs">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DemoCard title="Dialog">
              <Dialog>
                <DialogTrigger>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="glass-strong">
                  <DialogHeader>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>
                      This is a dialog with glassmorphism styling.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Dialog content goes here.
                    </p>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </DemoCard>
            <DemoCard title="Alert Dialog">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="destructive">Delete Item</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="glass-strong">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DemoCard>
            <DemoCard title="Sheet">
              <Sheet>
                <SheetTrigger>
                  <Button variant="outline">Open Sheet</Button>
                </SheetTrigger>
                <SheetContent className="glass-strong">
                  <SheetHeader>
                    <SheetTitle>Sheet Title</SheetTitle>
                    <SheetDescription>
                      A slide-out panel with glass effect.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Sheet content goes here.
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </DemoCard>
            <DemoCard title="Drawer">
              <Drawer>
                <DrawerTrigger>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent className="glass-strong">
                  <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                    <DrawerDescription>
                      A bottom drawer with glass effect.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                      Drawer content goes here.
                    </p>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </DemoCard>
            <DemoCard title="Popover">
              <Popover>
                <PopoverTrigger>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="glass">
                  <div className="space-y-2">
                    <h4 className="font-medium">Popover Title</h4>
                    <p className="text-sm text-muted-foreground">
                      Popover content with glass effect.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </DemoCard>
            <DemoCard title="Tooltip">
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline">Hover Me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip content</p>
                </TooltipContent>
              </Tooltip>
            </DemoCard>
            <DemoCard title="Hover Card">
              <HoverCard>
                <HoverCardTrigger>
                  <Button variant="link">@username</Button>
                </HoverCardTrigger>
                <HoverCardContent className="glass w-80">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@username</h4>
                      <p className="text-sm text-muted-foreground">
                        A brief description of the user.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </DemoCard>
            <DemoCard title="Context Menu">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-24 w-full items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
                  Right click here
                </ContextMenuTrigger>
                <ContextMenuContent className="glass">
                  <ContextMenuItem>Edit</ContextMenuItem>
                  <ContextMenuItem>Duplicate</ContextMenuItem>
                  <ContextMenuItem>Delete</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </DemoCard>
            <DemoCard title="Dropdown Menu">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DemoCard>
          </div>
        </Section>

        <Section title="Interactive">
          <div className="grid md:grid-cols-2 gap-6">
            <DemoCard title="Accordion">
              <Accordion className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is glassmorphism?</AccordionTrigger>
                  <AccordionContent>
                    Glassmorphism is a design trend featuring frosted glass effects
                    with background blur, transparency, and subtle borders.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does it work?</AccordionTrigger>
                  <AccordionContent>
                    It uses CSS backdrop-filter for blur effects combined with
                    semi-transparent backgrounds and subtle borders.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes, when implemented correctly with proper contrast ratios
                    and focus states, glassmorphism can be fully accessible.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </DemoCard>
            <DemoCard title="Collapsible">
              <Collapsible
                open={isCollapsibleOpen}
                onOpenChange={setIsCollapsibleOpen}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">Toggle Content</h4>
                  <CollapsibleTrigger>
                    <Button variant="ghost" size="sm">
                      {isCollapsibleOpen ? "Hide" : "Show"}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="mt-4 space-y-2">
                  <div className="rounded-lg border px-4 py-2 text-sm">
                    Hidden content item 1
                  </div>
                  <div className="rounded-lg border px-4 py-2 text-sm">
                    Hidden content item 2
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </DemoCard>
            <DemoCard title="Toggle">
              <div className="flex gap-2">
                <Toggle aria-label="Toggle bold">
                  <span className="font-bold">B</span>
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <span className="italic">I</span>
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <span className="underline">U</span>
                </Toggle>
              </div>
            </DemoCard>
            <DemoCard title="Toggle Group">
              <ToggleGroup defaultValue={["center"]}>
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
            </DemoCard>
            <DemoCard title="Resizable">
              <ResizablePanelGroup
                orientation="horizontal"
                className="min-h-[100px] rounded-lg border"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="text-sm">Panel 1</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="text-sm">Panel 2</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </DemoCard>
            <DemoCard title="Command">
              <Command className="rounded-lg border">
                <CommandInput placeholder="Type a command..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search</CommandItem>
                    <CommandItem>Settings</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Actions">
                    <CommandItem>New File</CommandItem>
                    <CommandItem>New Folder</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </DemoCard>
          </div>
        </Section>

        <Section title="Misc">
          <div className="grid md:grid-cols-2 gap-6">
            <DemoCard title="Keyboard Shortcuts">
              <div className="flex flex-wrap gap-2">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
                <span className="text-muted-foreground">or</span>
                <Kbd>Ctrl</Kbd>
                <Kbd>K</Kbd>
              </div>
            </DemoCard>
          </div>
        </Section>

        <footer className="text-center py-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Built with shadcn/ui and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
