// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri::{ Manager, Runtime, WebviewWindow, WebviewWindowBuilder};


#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_process::init())
        .setup(|app| {
            #[cfg(desktop)]{
                fn move_window_to_other_monitor<R: Runtime>(
                    window: &WebviewWindow<R>,
                    i: usize,
                ) -> tauri::Result<()> {
                    let monitors = window.available_monitors()?;
                    if monitors.len() > 2 {
                            let monitor = monitors
                            .get(i).ok_or( tauri::Error::WindowNotFound)?;
                        let pos = monitor.position();
                        window.set_position(*pos)?;
                      
                    } 
                    window.maximize()?;
                    Ok(())
                }
                
                app.handle()
                .plugin(tauri_plugin_updater::Builder::new().build())?;
                let window_main = app.get_webview_window("main").unwrap();
                move_window_to_other_monitor(&window_main, 0)?;
                let monitors = window_main.available_monitors()?;
                if monitors.len() > 2 {
                let window =
                 WebviewWindowBuilder::new(app, "side", tauri::WebviewUrl::App("./screen2".into()))
                     .build()?;
                    move_window_to_other_monitor(&window, 1)?;
                }
                
            }
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
