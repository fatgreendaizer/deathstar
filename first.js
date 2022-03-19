IBAction func openWelcome(_ sender: Any) {
        let window = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 800, height: 460),
                              styleMask: [.titled, .fullSizeContentView], backing: .buffered, defer: false)
        let windowController = NSWindowController(window: window)
        window.center()
        let contentView = WelcomeWindowView(windowController: windowController).edgesIgnoringSafeArea(.top)
        window.titlebarAppearsTransparent = true
        window.isMovableByWindowBackground = true
        window.contentView = NSHostingView(rootView: contentView)
        window.makeKeyAndOrderFront(self)
    }

    func applicationShouldHandleReopen(_ sender: NSApplication, hasVisibleWindows flag: Bool) -> Bool {
        if flag {
            return false
@@ -88,15 +100,7 @@ class AppDelegate: NSObject, NSApplicationDelegate, ObservableObject {

        switch behavior {
        case .welcome:
            let window = NSWindow(contentRect: NSRect(x: 0, y: 0, width: 800, height: 460),
                                  styleMask: [.titled, .fullSizeContentView], backing: .buffered, defer: false)
            let windowController = NSWindowController(window: window)
            window.center()
            let contentView = WelcomeWindowView(windowController: windowController).edgesIgnoringSafeArea(.top)
            window.titlebarAppearsTransparent = true
            window.isMovableByWindowBackground = true
            window.contentView = NSHostingView(rootView: contentView)
            window.makeKeyAndOrderFront(self)
            openWelcome(self)
        case .openPanel:
            CodeEditDocumentController.shared.openDocument(self)
